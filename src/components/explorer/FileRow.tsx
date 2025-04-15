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

  const hasChildren = children && Object.keys(children).length > 0;
  const hasContent = !!content;

  // Set initial states based on defaultOpen
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showContent, setShowContent] = useState(defaultOpen && hasContent);

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
    // Reduced left margin on mobile, scaled with level
    <div className={`ml-0.5 sm:ml-2`}>
      <div
        className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-slate-100 rounded cursor-pointer group transition-colors"
        onClick={handleClick}
      >
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
          {/* Arrow indicator for expandable items */}
          {hasChildren || hasContent ? (
            (isOpen && hasChildren) || (showContent && hasContent) ? (
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            )
          ) : (
            <div className="w-3 sm:w-4 flex-shrink-0" />
          )}

          {/* Icon */}
          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-black-600 flex-shrink-0" />

          {/* Label */}
          <span className="group-hover:text-blue-600 min-w-0 truncate text-sm sm:text-base">
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

      {/* Directory children - reduced margin for mobile */}
      {isOpen && hasChildren && (
        <div className="ml-2 sm:ml-4 border-l border-slate-200">
          {Object.values(children).map((child) => (
            <FileRow key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}

      {/* File content - reduced margin and padding for mobile */}
      {showContent && content && (
        <div className="ml-3 sm:ml-8 my-1 sm:my-2 p-2 sm:p-4 border-l border-slate-200 bg-gray-50 rounded-r">
          {content}
        </div>
      )}
    </div>
  );
};

export default FileRow;