import { Folder } from "lucide-react";
import { FileItem } from "@/components/explorer/types";

const PlaceholderContent = () => (
  <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded">
    <h2 className="text-xl font-bold mb-3">Coming Soon</h2>
    <p className="text-gray-600">
      Work experience details will be added here. This section is currently
      under construction.
    </p>
    <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded">
      <p>
        <strong>Note:</strong> Check back soon for updated information about
        previous work experience and accomplishments.
      </p>
    </div>
  </div>
);

export const workItems: Record<string, FileItem> = {
  work_experience: {
    id: "work_experience",
    label: "work_experience",
    icon: Folder,
    type: "Directory",
    size: "--",
    lastModified: "Dec 11, 2024",
    defaultOpen: true,
    children: {
      todo: {
        id: "work_experience/todo",
        label: "Things to do",
        icon: Folder,
        type: "Directory",
        size: "--",
        lastModified: "Dec 11, 2024",
        defaultOpen: true,
        content: <PlaceholderContent />,
      },
    },
  },
};
