// Type definitions for the File Explorer components

import { LucideIcon } from "lucide-react";

export type FileType =
  | "Directory"
  | "Markdown"
  | "HTML"
  | "JSON"
  | "Python"
  | "C++"
  | "Link"
  | "Text";

export interface FileItem {
  id: string;
  label: string;
  icon: LucideIcon;
  type: FileType;
  size?: string;
  lastModified?: string;
  link?: string;
  defaultOpen?: boolean;
  content?: React.ReactNode;
  children?: FileItem[];
}
