import { Phone, Linkedin, Github, Mail, FileText } from "lucide-react";
import { FileItem } from "@/components/explorer/types";

export const contactItems: Record<string, FileItem> = {
  contact: {
    id: "contact",
    label: "contact",
    icon: Phone,
    type: "Directory",
    size: "--",
    lastModified: "Dec 11, 2024",
    defaultOpen: true,
    children: {
      resume: {
        id: "contact/resume",
        label: "resume",
        icon: FileText,
        type: "Link",
        size: "--",
        lastModified: "16 April, 2025",
        link: "/resume.pdf",
      },
      linkedin: {
        id: "contact/linkedin",
        label: "linkedin",
        icon: Linkedin,
        type: "Link",
        size: "--",
        lastModified: "Dec 11, 2024",
        link: "https://linkedin.com/in/koda-edrick-aa52a0237",
      },
      github: {
        id: "contact/github",
        label: "github",
        icon: Github,
        type: "Link",
        size: "--",
        lastModified: "Dec 11, 2024",
        link: "https://github.com/KodaEd",
      },
      email: {
        id: "contact/email",
        label: "email",
        icon: Mail,
        type: "Link",
        size: "--",
        lastModified: "Dec 11, 2024",
        link: "mailto:contact@edrickkoda.com",
      },
    },
  },
};
