"use client";
import React from "react";
import FileRow from "./FileRow";
import { fileItems } from "@/data";

const FileExplorer: React.FC = () => {
  return (
    <div className="w-full">
      {/* Table Header - Made responsive */}
      <div className="flex items-center gap-2 p-2 border-b mb-2">
        <span className="flex-1 min-w-0 truncate ml-10">Name</span>
        <div className="hidden sm:flex gap-4 md:gap-8">
          <span className="w-16 md:w-24">Type</span>
          <span className="w-16 md:w-24 text-right">Size</span>
          <span className="w-20 md:w-32">Last Modified</span>
        </div>
      </div>

      {/* Table Rows */}
      <div>
        {Object.values(fileItems).map((item) => (
          <FileRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
