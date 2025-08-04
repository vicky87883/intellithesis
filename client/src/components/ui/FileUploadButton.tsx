"use client";

import { useRef, forwardRef } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const FileUploadButton = forwardRef<HTMLInputElement, FileUploadButtonProps>(
  ({ onFileSelect, accept, multiple = false, className = "", children, disabled = false }, ref) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      if (!disabled) {
        fileInputRef.current?.click();
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        if (multiple) {
          Array.from(files).forEach(file => onFileSelect(file));
        } else {
          onFileSelect(files[0]);
        }
      }
      
      // Reset the input value to allow selecting the same file again
      event.target.value = "";
    };

    return (
      <div className="inline-block">
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className={`inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {children || (
            <>
              <CloudArrowUpIcon className="w-4 h-4 mr-2" />
              <span>Upload File</span>
            </>
          )}
        </button>
        
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
    );
  }
);

FileUploadButton.displayName = "FileUploadButton"; 