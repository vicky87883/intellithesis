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
  Settings,
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
  onRun?: (code: string, language: string) => Promise<any>;
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
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any) => {
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
        
        const startTime = performance.now();
        
        if (language === 'javascript') {
          // Create a safe execution environment
          const sandbox = {
            console: {
              log: (...args: any[]) => {
                setOutput(prev => prev + args.join(' ') + '\n');
              },
              error: (...args: any[]) => {
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
      } catch (error: any) {
        setOutput(`Error: ${error.message}\n`);
        setIsSuccess(false);
      } finally {
        setIsRunning(false);
      }
    } else {
      // Use custom onRun function
      try {
        setIsRunning(true);
        setIsSuccess(null);
        setOutput('');
        
        const startTime = performance.now();
        const result = await onRun(code, language);
        
        setOutput(result.output || 'Code executed successfully\n');
        setExecutionTime(performance.now() - startTime);
        setIsSuccess(true);
      } catch (error: any) {
        setOutput(`Error: ${error.message}\n`);
        setIsSuccess(false);
      } finally {
        setIsRunning(false);
      }
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const resetCode = () => {
    setCode(defaultValue);
    setOutput('');
    setIsSuccess(null);
    setExecutionTime(0);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${getFileExtension(language)}`;
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
      rust: 'rs'
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
      rust: 'Rust'
    };
    return names[lang] || lang;
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Editor Header */}
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {getLanguageName(language)}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={copyCode}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Copy code"
            >
              {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </motion.button>
            
            <motion.button
              onClick={downloadCode}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download code"
            >
              <Download className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              onClick={resetCode}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Reset code"
            >
              <RotateCcw className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: isRunning ? 1 : 1.05 }}
              whileTap={{ scale: isRunning ? 1 : 0.95 }}
              title="Run code"
            >
              {isRunning ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Code Editor */}
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
            renderLineHighlight: 'all',
            selectOnLineNumbers: true,
            glyphMargin: true,
            useTabStops: false,
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 17,
              horizontalScrollbarSize: 17,
              useShadows: false,
              verticalHasArrows: true,
              horizontalHasArrows: true,
            }
          }}
        />
      </div>

      {/* Output Panel */}
      {(output || isRunning || isSuccess !== null) && (
        <motion.div
          className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Output
                </span>
                {isSuccess !== null && (
                  <div className="flex items-center space-x-1">
                    {isSuccess ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-xs ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                      {isSuccess ? 'Success' : 'Error'}
                    </span>
                  </div>
                )}
              </div>
              
              {executionTime > 0 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {executionTime.toFixed(2)}ms
                </span>
              )}
            </div>
            
            <div className="bg-black text-green-400 rounded-lg p-4 font-mono text-sm overflow-auto max-h-48">
              <pre className="whitespace-pre-wrap">{output || 'Ready to run code...'}</pre>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 