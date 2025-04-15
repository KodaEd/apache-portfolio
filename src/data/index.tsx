// Updated file structure for src/data/index.tsx
import { FileItem } from "@/components/explorer/types";
import { aboutItems } from "./about";
import { projectItems } from "./projects";
import { workItems } from "./work";
import { contactItems } from "./contact";
import { createFileItems } from "./types";

// Combine all items in the appropriate order
const combinedItems: Record<string, FileItem> = {
  ...aboutItems,
  ...workItems,
  ...projectItems,
  ...contactItems,
};

// Transform into array format for the FileExplorer component
export const fileItems: Record<string, FileItem> =
  createFileItems(combinedItems);

// Export individual sections for more granular use if needed
export { aboutItems, projectItems, workItems, contactItems };
