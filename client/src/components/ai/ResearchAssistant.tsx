"use client";
import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Send, Upload, Image, FileText, Bot, User, Paperclip, X, Loader2, Mic, MicOff, MessageSquare, Trash2, History } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { chatAPI, researchAssistantAPI } from "@/services/api";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  files?: FileInfo[];
  message_type?: string;
  file_name?: string;
  voice_duration?: number;
}

interface FileInfo {
  name: string;
  type: string;
  size: number;
  url?: string;
}

interface ChatSession {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  message_count: number;
}

export function ResearchAssistant() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileInfo[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string>("");
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [showSessions, setShowSessions] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const voiceInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Debug session data
  useEffect(() => {
    console.log('Session data:', session);
    console.log('User ID:', session?.user?.id);
  }, [session]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load chat sessions on mount
  useEffect(() => {
    if (session?.user?.id) {
      loadChatSessions();
    }
  }, [session?.user?.id]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Hello! I'm your IntelliThesis research assistant powered by Groq (Llama3-70b-8192). I can help you with:\n\n• Academic research and analysis\n• Document review and insights\n• Literature review assistance\n• Research methodology guidance\n• Citation and reference help\n\nYou can also upload PDFs, images, or use voice messages. How can I assist you today?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const loadChatSessions = async () => {
    const userId = session?.user?.id || 'eb5dba5c-ab36-4469-a169-bb987d61f67a';
    
    try {
      const response = await chatAPI.getHistory(userId);
      if (response.data.success) {
        setChatSessions(response.data.sessions);
      }
    } catch (error) {
      console.error("Error loading chat sessions:", error);
    }
  };

  const loadSessionMessages = async (sessionId: string) => {
    try {
      const response = await chatAPI.getSessionMessages(sessionId);
      if (response.data.success) {
        const formattedMessages: Message[] = response.data.messages.map((msg: any) => ({
          id: msg.id,
          role: msg.role,
          content: msg.content,
          timestamp: new Date(msg.created_at),
          message_type: msg.message_type,
          file_name: msg.file_name,
          voice_duration: msg.voice_duration,
        }));
        setMessages(formattedMessages);
        setCurrentSessionId(sessionId);
        setShowSessions(false);
      }
    } catch (error) {
      console.error("Error loading session messages:", error);
    }
  };

  const deleteSession = async (sessionId: string) => {
    try {
      const response = await chatAPI.deleteSession(sessionId);
      if (response.data.success) {
        loadChatSessions();
        if (currentSessionId === sessionId) {
          setCurrentSessionId("");
          setMessages([{
            id: "welcome",
            role: "assistant",
            content: "Hello! I'm your IntelliThesis research assistant. How can I help you today?",
            timestamp: new Date(),
          }]);
        }
      }
    } catch (error) {
      console.error("Error deleting session:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Use session user ID or fallback to a default user ID
    const userId = session?.user?.id || 'eb5dba5c-ab36-4469-a169-bb987d61f67a';
    
    console.log('Sending message with user ID:', userId);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
      files: uploadedFiles.length > 0 ? uploadedFiles : undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setUploadedFiles([]);
    setIsLoading(true);

    try {
      const response = await chatAPI.sendMessage(inputMessage, "", currentSessionId, userId);
      
      if (response.data.success) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response.data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        
        if (!currentSessionId && response.data.session_id) {
          setCurrentSessionId(response.data.session_id);
          loadChatSessions();
        }
      } else {
        throw new Error("Failed to get response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (files: FileList, type: 'document' | 'image') => {
    const userId = session?.user?.id || 'eb5dba5c-ab36-4469-a169-bb987d61f67a';

    setIsUploading(true);

    try {
      for (const file of Array.from(files)) {
        let response;
        
        if (type === 'document') {
          response = await researchAssistantAPI.uploadDocument(file, currentSessionId, 'general', userId);
        } else {
          response = await researchAssistantAPI.uploadImage(file, currentSessionId, 'describe', userId);
        }

        if (response.data.success) {
          const analysisMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: type === 'document' 
              ? `📄 **${file.name}** uploaded and analyzed!\n\n**Summary:** ${response.data.analysis.summary}\n\n**Key Points:**\n${response.data.analysis.key_points?.map((point: string) => `• ${point}`).join('\n') || 'No key points extracted'}\n\n**Suggestions:**\n${response.data.analysis.suggestions?.map((suggestion: string) => `• ${suggestion}`).join('\n') || 'No suggestions available'}`
              : `🖼️ **${file.name}** uploaded!\n\n${response.data.result}`,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, analysisMessage]);
          
          if (!currentSessionId && response.data.session_id) {
            setCurrentSessionId(response.data.session_id);
            loadChatSessions();
          }
        }
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "I encountered an error while processing your files. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsUploading(false);
    }
  };

  const startVoiceRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        handleVoiceUpload(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = audioChunks;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting voice recording:", error);
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleVoiceUpload = async (audioBlob: Blob) => {
    const userId = session?.user?.id || 'eb5dba5c-ab36-4469-a169-bb987d61f67a';

    try {
      const audioFile = new File([audioBlob], "voice_message.wav", { type: "audio/wav" });
      const response = await researchAssistantAPI.processVoice(audioFile, currentSessionId, userId);

      if (response.data.success) {
        // Add voice message
        const voiceMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: response.data.transcribed_text,
          timestamp: new Date(),
          message_type: "voice",
        };
        setMessages(prev => [...prev, voiceMessage]);
        
        if (!currentSessionId && response.data.session_id) {
          setCurrentSessionId(response.data.session_id);
          loadChatSessions();
        }
      }
    } catch (error) {
      console.error("Error uploading voice:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Chat Sessions Sidebar */}
      {showSessions && (
        <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Chat History</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => loadSessionMessages(session.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {session.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(session.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSession(session.id);
                    }}
                    className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Research Assistant
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Powered by Groq (Llama3-70b-8192)
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSessions(!showSessions)}
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                title="Chat History"
              >
                <History className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.role === 'assistant' && (
                    <Bot className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-400">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              {/* File Upload Buttons */}
              <div className="flex items-center space-x-2 mb-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'document')}
                  className="hidden"
                />
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'image')}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors disabled:opacity-50"
                  title="Upload Document"
                >
                  <FileText className="h-5 w-5" />
                </button>
                <button
                  onClick={() => imageInputRef.current?.click()}
                  disabled={isUploading}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors disabled:opacity-50"
                  title="Upload Image"
                >
                  <Image className="h-5 w-5" />
                </button>
                <button
                  onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                  className={`p-2 transition-colors ${
                    isRecording
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                  title={isRecording ? "Stop Recording" : "Voice Message"}
                >
                  {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1"
                    >
                      <Paperclip className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {file.name}
                      </span>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Message Input */}
              <div className="flex items-end space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}