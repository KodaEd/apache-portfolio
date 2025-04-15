// src/data/work.tsx
import { Folder, Briefcase, Building, Globe } from "lucide-react";
import { FileItem } from "@/components/explorer/types";
import ComingSoonStub from "@/components/ComingSoonStub";
import GloomStudios from "./gloom_studios";
import WePrintProject from "./we_print";
import SydneyScholarsProject from "./sydney_scholars";

export const workItems: Record<string, FileItem> = {
  work_experience: {
    id: "work_experience",
    label: "work_experience",
    icon: Folder,
    type: "Directory",
    size: "--",
    lastModified: "April 14, 2025",
    defaultOpen: true,
    children: {
      gloom_studios: {
        id: "work_experience/gloom_studios",
        label: "gloom_studios.md",
        icon: Building,
        type: "Markdown",
        size: "3.8 KB",
        lastModified: "April 14, 2025",
        defaultOpen: true,
        content: <GloomStudios />,
      },
      client_project_we_print: {
        id: "work_experience/client_project_we_print",
        label: "client-project_we-print.md",
        icon: Globe,
        type: "Markdown",
        size: "2.6 KB",
        lastModified: "April 10, 2025",
        defaultOpen: true,
        content: <WePrintProject />,
      },
      client_project_sydney_scholars: {
        id: "work_experience/client_project_sydney_scholars",
        label: "client-project_sydney-scholars.md",
        icon: Globe,
        type: "Markdown",
        size: "2.5 KB",
        defaultOpen: true,
        lastModified: "March 15, 2025",
        content: <ComingSoonStub />,
      },
      cv_medan_mas_karimun: {
        id: "work_experience/cv_medan_mas_karimun",
        label: "cv_medan_mas_karimun.md",
        icon: Briefcase,
        type: "Markdown",
        size: "2.7 KB",
        lastModified: "February 10, 2025",
        content: <ComingSoonStub />,
      },
    },
  },
};
