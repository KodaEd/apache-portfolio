// src/data/projects.tsx
import { Folder, FileText } from "lucide-react";
import { FileItem } from "@/components/explorer/types";
import ComingSoonStub from "@/components/ComingSoonStub";

export const projectItems: Record<string, FileItem> = {
  projects: {
    id: "projects",
    label: "projects",
    icon: Folder,
    type: "Directory",
    size: "--",
    lastModified: "April 14, 2025",
    defaultOpen: true,
    children: {
      // FULLSTACK PROJECTS
      fullstack: {
        id: "projects/fullstack",
        label: "fullstack",
        icon: Folder,
        type: "Directory",
        size: "--",
        lastModified: "April 14, 2025",
        children: {
          groupedin: {
            id: "projects/fullstack/groupedin",
            label: "groupedin.md",
            icon: FileText,
            type: "Markdown",
            size: "3.2 KB",
            lastModified: "April 10, 2025",
            content: <ComingSoonStub />,
          },
          mental_aquarium: {
            id: "projects/fullstack/mental_aquarium",
            label: "mental_aquarium.md",
            icon: FileText,
            type: "Markdown",
            size: "2.8 KB",
            lastModified: "April 12, 2025",
            content: <ComingSoonStub />,
          },
          hobbify: {
            id: "projects/fullstack/hobbify",
            label: "hobbify.md",
            icon: FileText,
            type: "Markdown",
            size: "2.5 KB",
            lastModified: "March 25, 2025",
            content: <ComingSoonStub />,
          },
          skill_issue: {
            id: "projects/fullstack/skill_issue",
            label: "skill_issue.md",
            icon: FileText,
            type: "Markdown",
            size: "2.9 KB",
            lastModified: "February 28, 2025",
            content: <ComingSoonStub />,
          },
        },
      },

      // FRONTEND PROJECTS
      frontend: {
        id: "projects/frontend",
        label: "frontend",
        icon: Folder,
        type: "Directory",
        size: "--",
        lastModified: "April 14, 2025",
        children: {
          airbrb: {
            id: "projects/frontend/airbrb",
            label: "airbrb.md",
            icon: FileText,
            type: "Markdown",
            size: "2.4 KB",
            lastModified: "April 5, 2025",
            content: <ComingSoonStub />,
          },
          my_fitness_figma: {
            id: "projects/frontend/my_fitness_figma",
            label: "my_fitness_figma.md",
            icon: FileText,
            type: "Markdown",
            size: "1.9 KB",
            lastModified: "March 20, 2025",
            content: <ComingSoonStub />,
          },
        },
      },

      // OTHERS CATEGORY
      others: {
        id: "projects/others",
        label: "others",
        icon: Folder,
        type: "Directory",
        size: "--",
        lastModified: "April 14, 2025",
        children: {
          // OPERATING SYSTEMS PROJECTS
          operating_systems: {
            id: "projects/operating_systems",
            label: "operating_systems",
            icon: Folder,
            type: "Directory",
            size: "--",
            lastModified: "April 14, 2025",
            children: {
              kernel_vm_management: {
                id: "projects/operating_systems/kernel_vm_management",
                label: "kernel_vm_management.md",
                icon: FileText,
                type: "Markdown",
                size: "3.1 KB",
                lastModified: "March 15, 2025",
                content: <ComingSoonStub />,
              },
              vfs: {
                id: "projects/operating_systems/vfs",
                label: "vfs.md",
                icon: FileText,
                type: "Markdown",
                size: "2.7 KB",
                lastModified: "February 10, 2025",
                content: <ComingSoonStub />,
              },
            },
          },

          // RUST PROGRAMMING PROJECTS
          rust_programming: {
            id: "projects/rust_programming",
            label: "rust_programming",
            icon: Folder,
            type: "Directory",
            size: "--",
            lastModified: "April 14, 2025",
            children: {
              turtle_script_compiler: {
                id: "projects/rust_programming/turtle_script_compiler",
                label: "turtle_script_compiler.md",
                icon: FileText,
                type: "Markdown",
                size: "2.8 KB",
                lastModified: "April 2, 2025",
                content: <ComingSoonStub />,
              },
              rsheet: {
                id: "projects/rust_programming/rsheet",
                label: "rsheet.md",
                icon: FileText,
                type: "Markdown",
                size: "2.5 KB",
                lastModified: "March 30, 2025",
                content: <ComingSoonStub />,
              },
            },
          },

          // SOFTWARE TESTING PROJECTS
          software_testing: {
            id: "projects/software_testing",
            label: "software_testing",
            icon: Folder,
            type: "Directory",
            size: "--",
            lastModified: "April 14, 2025",
            children: {
              mini_lop_js_fuzzer: {
                id: "projects/software_testing/mini_lop_js_fuzzer",
                label: "mini-lop_js_fuzzer.md",
                icon: FileText,
                type: "Markdown",
                size: "2.6 KB",
                lastModified: "February 15, 2025",
                content: <ComingSoonStub />,
              },
            },
          },
          marketing_subcom: {
            id: "projects/others/marketing_subcom",
            label: "marketing_subcom.md",
            icon: FileText,
            type: "Markdown",
            size: "2.3 KB",
            lastModified: "January 20, 2025",
            content: <ComingSoonStub />,
          },
        },
      },
    },
  },
};
