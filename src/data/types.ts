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
  items: Record<string, FileItem>,
  basePath: string = ""
): Record<string, FileItem> {
  const result: Record<string, FileItem> = {};

  Object.entries(items).forEach(([key, value]) => {
    // Compute the id, avoiding a leading slash if basePath is empty
    const id = basePath ? `${basePath}/${key}` : key;
    result[key] = {
      ...value,
      id,
      // Recursively handle children, preserving the record structure
      children: value.children
        ? createFileItems(value.children, id)
        : undefined,
    };
  });

  return result;
}
