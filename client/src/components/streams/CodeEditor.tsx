'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Copy, Download } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(
  () => import('@monaco-editor/react'),
  { ssr: false }
);

interface CodeEditorProps {
  codeSnippets: {
    [key: string]: string;
  };
  streamSlug: string;
}

export default function CodeEditor({ codeSnippets, streamSlug }: CodeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const editorRef = useRef<unknown>(null);

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'java', name: 'Java', icon: '☕' }
  ];

  const currentCode = codeSnippets[selectedLanguage] || '';

  const handleEditorDidMount = (editor: unknown) => {
    editorRef.current = editor;
  };

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
    setIsDropdownOpen(false);
  };

  const handleCopyCode = () => {
    if (editorRef.current) {
      const code = (editorRef.current as any).getValue();
      navigator.clipboard.writeText(code);
    }
  };

  const handleDownloadCode = () => {
    const code = (editorRef.current as any)?.getValue() || currentCode;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${streamSlug}-${selectedLanguage}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRunCode = () => {
    // This would integrate with a backend service to run code
    console.log('Running code:', (editorRef.current as any)?.getValue());
  };

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span>{languages.find(lang => lang.id === selectedLanguage)?.icon}</span>
                <span>{languages.find(lang => lang.id === selectedLanguage)?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10"
                >
                  {languages.map((language) => (
                    <button
                      key={language.id}
                      onClick={() => handleLanguageChange(language.id)}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2 ${
                        selectedLanguage === language.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>{language.icon}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Read-only Toggle */}
            <button
              onClick={() => setIsReadOnly(!isReadOnly)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isReadOnly
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}
            >
              {isReadOnly ? 'Read Only' : 'Editable'}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <motion.button
              onClick={handleRunCode}
              className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4" />
              <span>Run</span>
            </motion.button>

            <motion.button
              onClick={handleCopyCode}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </motion.button>

            <motion.button
              onClick={handleDownloadCode}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="h-96">
        <MonacoEditor
          height="100%"
          language={selectedLanguage}
          theme="vs-dark"
          value={currentCode}
          options={{
            readOnly: isReadOnly,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: 'on',
            folding: true,
            lineDecorationsWidth: 10,
            lineNumbersMinChars: 3,
            glyphMargin: true,
            renderLineHighlight: 'all',
            selectOnLineNumbers: true,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 17,
              horizontalScrollbarSize: 17,
              verticalSliderSize: 17,
              horizontalSliderSize: 17,
              useShadows: false,
              arrowSize: 30,
            },
          }}
          onMount={handleEditorDidMount}
        />
      </div>

      {/* Output Panel */}
      <div className="bg-gray-900 text-green-400 p-4 font-mono text-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">Output</span>
          <span className="text-gray-500">Ready to run code...</span>
        </div>
        <div className="text-gray-400">
          Click &quot;Run&quot; to execute the code and see the output here.
        </div>
      </div>
    </div>
  );
} 