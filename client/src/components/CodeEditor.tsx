'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Square,
  Download, 
  Share2, 
  Copy, 
  RotateCcw,
  Terminal,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string;
  defaultValue: string;
  theme?: 'vs-dark' | 'light';
  height?: string;
  onRun?: (code: string, language: string) => Promise<unknown>;
}

export default function CodeEditor({ 
  language, 
  defaultValue, 
  theme = 'vs-dark',
  height = '400px',
  onRun 
}: CodeEditorProps) {
  const [code, setCode] = useState(defaultValue);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [executionTime, setExecutionTime] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const editorRef = useRef<unknown>(null);

  const handleEditorDidMount = (editor: unknown) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };

  const runCode = async () => {
    if (!onRun) {
      // Default code execution for supported languages
      try {
        setIsRunning(true);
        setIsSuccess(null);
        setOutput('');
        setShowOutput(true);
        
        const startTime = performance.now();
        
        if (language === 'javascript') {
          // Create a safe execution environment
          const sandbox = {
            console: {
              log: (...args: unknown[]) => {
                setOutput(prev => prev + args.join(' ') + '\n');
              },
              error: (...args: unknown[]) => {
                setOutput(prev => prev + 'ERROR: ' + args.join(' ') + '\n');
              }
            },
            setTimeout,
            setInterval,
            clearTimeout,
            clearInterval
          };
          
          // Execute the code
          const result = new Function('console', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', code);
          result(sandbox.console, sandbox.setTimeout, sandbox.setInterval, sandbox.clearTimeout, sandbox.clearInterval);
          
          setExecutionTime(performance.now() - startTime);
          setIsSuccess(true);
        } else if (language === 'python') {
          // For Python, we'll simulate execution with a mock
          setOutput('Python execution would be handled by backend service\n');
          setExecutionTime(performance.now() - startTime);
          setIsSuccess(true);
        } else {
          setOutput(`Language ${language} execution not yet implemented\n`);
          setIsSuccess(false);
        }
      } catch (error: unknown) {
        setOutput(`Error: ${(error as Error).message}\n`);
        setIsSuccess(false);
      } finally {
        setIsRunning(false);
      }
    } else {
      try {
        setIsRunning(true);
        setIsSuccess(null);
        setOutput('');
        setShowOutput(true);
        
        const startTime = performance.now();
        const result = await onRun(code, language);
        setExecutionTime(performance.now() - startTime);
        
        setOutput(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
        setIsSuccess(true);
      } catch (error: unknown) {
        setOutput(`Error: ${(error as Error).message}\n`);
        setIsSuccess(false);
      } finally {
        setIsRunning(false);
      }
    }
  };

  const stopCode = () => {
    setIsRunning(false);
    setIsSuccess(false);
    setOutput('Execution stopped by user\n');
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const resetCode = () => {
    setCode(defaultValue);
    setOutput('');
    setShowOutput(false);
    setIsSuccess(null);
    setExecutionTime(0);
  };

  const downloadCode = () => {
    const extension = getFileExtension(language);
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFileExtension = (lang: string) => {
    const extensions: { [key: string]: string } = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      c: 'c',
      html: 'html',
      css: 'css',
      php: 'php',
      ruby: 'rb',
      go: 'go',
      rust: 'rs',
      swift: 'swift',
      kotlin: 'kt'
    };
    return extensions[lang] || 'txt';
  };

  const getLanguageName = (lang: string) => {
    const names: { [key: string]: string } = {
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      python: 'Python',
      java: 'Java',
      cpp: 'C++',
      c: 'C',
      html: 'HTML',
      css: 'CSS',
      php: 'PHP',
      ruby: 'Ruby',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      kotlin: 'Kotlin'
    };
    return names[lang] || lang;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {getLanguageName(language)} Editor
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Write and run {getLanguageName(language)} code
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <motion.button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRunning ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            <span className="hidden sm:inline">Run</span>
          </motion.button>

          <motion.button
            onClick={stopCode}
            disabled={!isRunning}
            className="flex items-center px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-lg font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Square className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Stop</span>
          </motion.button>

          <motion.button
            onClick={copyCode}
            className="flex items-center px-3 sm:px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Copy className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </motion.button>

          <motion.button
            onClick={downloadCode}
            className="flex items-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Download</span>
          </motion.button>

          <motion.button
            onClick={resetCode}
            className="flex items-center px-3 sm:px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Reset</span>
          </motion.button>
        </div>
      </div>

      {/* Editor */}
      <div className="relative">
        <Editor
          height={height}
          language={language}
          theme={theme}
          value={code}
          onChange={handleCodeChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: 'on',
            folding: true,
            foldingStrategy: 'indentation',
            showFoldingControls: 'always',
            disableLayerHinting: true,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10
            }
          }}
        />
      </div>

      {/* Output Panel */}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <Terminal className="w-4 h-4 mr-2" />
                Output
                {isSuccess !== null && (
                  <span className="ml-2">
                    {isSuccess ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                  </span>
                )}
              </h4>
              {executionTime > 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {executionTime.toFixed(2)}ms
                </span>
              )}
            </div>
            <div className="bg-black dark:bg-gray-900 rounded-lg p-4 overflow-auto max-h-64">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {output || 'No output yet. Run your code to see results.'}
              </pre>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 