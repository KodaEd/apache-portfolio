"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FileItem } from "./types";

interface FileRowProps {
  item: FileItem;
  level?: number;
}

const FileRow: React.FC<FileRowProps> = ({ item, level = 0 }) => {
  const {
    label,
    icon: Icon,
    type,
    size,
    lastModified,
    content,
    link,
    defaultOpen = false,
    children,
  } = item;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showContent, setShowContent] = useState(false);

  const hasChildren = children && Object.keys(children).length > 0;
  const hasContent = !!content;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else if (link) {
      window.open(link, "_blank");
    } else if (hasContent) {
      setShowContent(!showContent);
    }
  };

  return (
    <div className="ml-2">
      <div
        className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer group transition-colors"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Arrow indicator for expandable items */}
          {hasChildren || hasContent ? (
            isOpen || showContent ? (
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            )
          ) : (
            <div className="w-4 flex-shrink-0" />
          )}

          {/* Icon */}
          <Icon className="w-4 h-4 text-black-600 flex-shrink-0" />

          {/* Label */}
          <span className="group-hover:text-blue-600 min-w-0 truncate">
            {label}
          </span>
        </div>

        {/* File information - made responsive */}
        <div className="hidden sm:flex gap-4 md:gap-8 text-sm">
          <span className="w-16 md:w-24 truncate">{type}</span>
          <span className="w-16 md:w-24 text-right truncate">
            {size || "--"}
          </span>
          <span className="w-20 md:w-32 truncate">{lastModified || "--"}</span>
        </div>
      </div>

      {/* Directory children */}
      {isOpen && hasChildren && (
        <div className="ml-4 border-l border-slate-200">
          {Object.values(children).map((child) => (
            <FileRow key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}

      {/* File content - expanded in place instead of modal */}
      {showContent && content && (
        <div className="ml-8 my-2 p-4 border-l border-slate-200 bg-gray-50 rounded-r">
          {/* The content is now directly rendered as React.ReactNode */}
          {content}
        </div>
      )}
    </div>
  );
};

export default FileRow;
