"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface DirectoryItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  lastModified?: string;
  size?: string;
  type?: string;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({
  label,
  icon: Icon,
  children,
  defaultOpen = false,
  lastModified,
  size,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasChildren = children && React.Children.count(children) > 0;

  return (
    <div className="ml-2">
      <div
        className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer group"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 flex-1">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          ) : (
            <div className="w-4" />
          )}
          <Icon className="w-4 h-4 text-black-600" />
          <span className="group-hover:text-blue-600 min-w-[200px]">
            {label}
          </span>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <span className="w-24">{type}</span>
          <span className="w-24 text-right">{size}</span>
          <span className="w-32">{lastModified}</span>
        </div>
      </div>
      {isOpen && children && (
        <div className="ml-4 border-l border-slate-200">{children}</div>
      )}
    </div>
  );
};

export default DirectoryItem;
