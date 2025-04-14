// Shared type definitions for data
import { FileItem } from "@/components/explorer/types";

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
