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
    if (!session?.user?.id) return;
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/sessions/${session.user.id}`);
      if (response.ok) {
        const data = await response.json();
        setChatSessions(data.sessions);
      }
    } catch (error) {
      console.error("Error loading chat sessions:", error);
    }
  };

  const loadSessionMessages = async (sessionId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/session/${sessionId}/messages`);
      if (response.ok) {
        const data = await response.json();
        const formattedMessages: Message[] = data.messages.map((msg: any) => ({
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/session/${sessionId}`, {
        method: "DELETE",
      });
      if (response.ok) {
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
    if (!inputMessage.trim() || !session?.user?.id) return;

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
      const formData = new FormData();
      formData.append("message", inputMessage);
      formData.append("user_id", session.user.id);
      formData.append("context", "");
      if (currentSessionId) {
        formData.append("session_id", currentSessionId);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/chat`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        
        if (!currentSessionId && data.session_id) {
          setCurrentSessionId(data.session_id);
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
    if (!session?.user?.id) return;

    setIsUploading(true);
    const uploadedFiles: FileInfo[] = [];

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("user_id", session.user.id);
        if (currentSessionId) {
          formData.append("session_id", currentSessionId);
        }

        const endpoint = type === 'document' 
          ? `${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/upload-document`
          : `${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/upload-image`;

        if (type === 'document') {
          formData.append("document_type", "general");
        } else {
          formData.append("task", "describe");
        }

        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          uploadedFiles.push({
            name: file.name,
            type: file.type,
            size: file.size,
          });

          // Add analysis message
          const analysisMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: type === 'document' 
              ? `📄 **${file.name}** uploaded and analyzed!\n\n**Summary:** ${data.analysis.summary}\n\n**Key Points:**\n${data.analysis.key_points?.map((point: string) => `• ${point}`).join('\n') || 'No key points extracted'}\n\n**Suggestions:**\n${data.analysis.suggestions?.map((suggestion: string) => `• ${suggestion}`).join('\n') || 'No suggestions available'}`
              : `🖼️ **${file.name}** uploaded!\n\n${data.result}`,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, analysisMessage]);
          
          if (!currentSessionId && data.session_id) {
            setCurrentSessionId(data.session_id);
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
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await handleVoiceUpload(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting voice recording:", error);
      alert("Unable to access microphone. Please check permissions.");
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleVoiceUpload = async (audioBlob: Blob) => {
    if (!session?.user?.id) return;

    const formData = new FormData();
    formData.append("audio_file", audioBlob, "voice_message.wav");
    formData.append("user_id", session.user.id);
    if (currentSessionId) {
      formData.append("session_id", currentSessionId);
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/research-assistant/voice`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        
        // Add voice message
        const voiceMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: data.transcribed_text,
          timestamp: new Date(),
          message_type: "voice",
        };
        setMessages(prev => [...prev, voiceMessage]);
        
        if (!currentSessionId && data.session_id) {
          setCurrentSessionId(data.session_id);
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
            <button
              onClick={() => setShowSessions(!showSessions)}
              className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <History className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="flex items-start space-x-2">
                  <div className={`p-1 rounded-full ${
                    message.role === "user" 
                      ? "bg-white/20" 
                      : "bg-gradient-to-r from-blue-500 to-purple-600"
                  }`}>
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="whitespace-pre-wrap text-sm">
                      {message.content}
                    </div>
                    {message.files && message.files.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {message.files.map((file, index) => (
                          <div key={index} className="flex items-center space-x-2 text-xs opacity-80">
                            <Paperclip className="h-3 w-3" />
                            <span>{file.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {message.message_type === "voice" && (
                      <div className="mt-2 flex items-center space-x-2 text-xs opacity-80">
                        <Mic className="h-3 w-3" />
                        <span>Voice message</span>
                        {message.voice_duration && (
                          <span>({message.voice_duration}s)</span>
                        )}
                      </div>
                    )}
                    <div className="text-xs opacity-60 mt-2">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Thinking...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Uploaded Files Preview */}
        {uploadedFiles.length > 0 && (
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap gap-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-600"
                >
                  <Paperclip className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {file.name}
                  </span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-end space-x-2">
            {/* Action Buttons */}
            <div className="flex space-x-1">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 disabled:opacity-50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Upload Document"
              >
                {isUploading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => imageInputRef.current?.click()}
                disabled={isUploading}
                className="p-2 text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 disabled:opacity-50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Upload Image"
              >
                {isUploading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Image className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                disabled={isUploading}
                className={`p-2 rounded-lg transition-colors ${
                  isRecording 
                    ? "text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/20" 
                    : "text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                title={isRecording ? "Stop Recording" : "Voice Message"}
              >
                {isRecording ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Text Input */}
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about research, upload documents for analysis, or share images..."
                className="w-full resize-none border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                rows={1}
                style={{ minHeight: "48px", maxHeight: "120px" }}
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Hidden File Inputs */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.txt,.doc,.docx"
            onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'document')}
            className="hidden"
          />
          <input
            ref={imageInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'image')}
            className="hidden"
          />
          <input
            ref={voiceInputRef}
            type="file"
            accept="audio/*"
            onChange={(e) => e.target.files && handleVoiceUpload(e.target.files[0])}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
} 