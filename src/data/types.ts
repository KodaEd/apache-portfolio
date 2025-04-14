// Shared type definitions for data
import { FileItem } from "@/components/explorer/types";

export interface AboutData {
  background: React.ReactNode;
  education: React.ReactNode;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: React.ReactNode;
}

export interface Project {
  title: string;
  tags: string[];
  description: React.ReactNode;
  features: string[];
  demoLink?: string;
  repoLink?: string;
}

export interface ContactInfo {
  linkedin: string;
  github: string;
  email: string;
}

// Function to convert section data to FileItem structure
export function createFileItems(
  items: Record<string, any>,
  basePath: string = ""
): FileItem[] {
  return Object.entries(items).map(([key, value]) => {
    const item = value as FileItem;
    return {
      ...item,
      id: `${basePath}/${key}`,
      children: item.children
        ? createFileItems(item.children, `${basePath}/${key}`)
        : undefined,
    };
  });
}
