"use client";

import TableRow from "@/components/table/TableRow";
import WeatherDashboard from "@/components/WeatherDashboard";
import {
  Folder,
  FileText,
  Code,
  User,
  Briefcase,
  GraduationCap,
  Github,
  Mail,
  Phone,
  BriefcaseBusiness
} from 'lucide-react';

export default function Table() {
  return (
    <>
      <TableRow
        label="about_me"
        icon={User}
        type="Directory"
        size="2.4 KB"
        lastModified="Dec 10, 2024"
      >
        <TableRow
          label="skills.json"
          icon={FileText}
          type="JSON"
          size="1.8 KB"
          lastModified="Dec 11, 2024"
          markdownPath="about/skills.json"
        />
        <TableRow
          label="education.md"
          icon={GraduationCap}
          type="Markdown"
          size="1.2 KB"
          lastModified="Dec 09, 2024"
          markdownPath="about/education.md"
        />
      </TableRow>

      <TableRow
        label="projects"
        icon={Folder}
        defaultOpen={true}
        type="Directory"
        size="--"
        lastModified="Dec 11, 2024"
      >
        <TableRow
          label="web_development"
          icon={Folder}
          type="Directory"
          size="--"
          lastModified="Dec 11, 2024"
        >
          <TableRow
            label="weather_dashboard.html"
            icon={Code}
            type="HTML"
            size="4.5 KB"
            lastModified="Dec 11, 2024"
            content={WeatherDashboard}
          />
          <TableRow
            label="project_notes.md"
            icon={FileText}
            type="Markdown"
            size="2.1 KB"
            lastModified="Dec 10, 2024"
            markdownPath="projects/project_notes.md"
          />
        </TableRow>
      </TableRow>

      <TableRow
        label="experience"
        icon={BriefcaseBusiness}
        type="Directory"
        size="--"
        lastModified="Dec 11, 2024"
      >
        <TableRow
          label="internships.md"
          icon={Briefcase}
          type="Markdown"
          size="3.5 KB"
          lastModified="Dec 10, 2024"
          markdownPath="experience/internships.md"
        />
        <TableRow
          label="work_history.json"
          icon={FileText}
          type="JSON"
          size="2.8 KB"
          lastModified="Dec 09, 2024"
          markdownPath="experience/work_history.json"
        />
      </TableRow>

      <TableRow
        label="contact"
        icon={Phone}
        type="Directory"
        size="--"
        lastModified="Dec 11, 2024"
      >
        <TableRow
          label="github"
          icon={Github}
          type="Link"
          size="--"
          lastModified="Dec 11, 2024"
          link="https://github.com/edrick-koda"
        />
        <TableRow
          label="email"
          icon={Mail}
          type="Link"
          size="--"
          lastModified="Dec 11, 2024"
          link="mailto:contact@edrickkoda.com"
        />
      </TableRow>
    </>
  );
}