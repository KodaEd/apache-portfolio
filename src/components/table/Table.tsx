"use client"
import TableRow from "@/components/table/TableRow";
import {Folder, FileText, Code, User, Briefcase, GraduationCap, Github, Mail, Phone, BriefcaseBusiness } from 'lucide-react';


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
        />
        <TableRow
          label="education.md"
          icon={GraduationCap}
          type="Markdown"
          size="1.2 KB"
          lastModified="Dec 09, 2024"
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
            label="react_projects"
            icon={Code}
            type="Directory"
            size="--"
            lastModified="Dec 11, 2024"
          />
          <TableRow
            label="full_stack_apps"
            icon={Code}
            type="Directory"
            size="--"
            lastModified="Dec 10, 2024"
          />
        </TableRow>
        <TableRow
          label="algorithms"
          icon={Folder}
          type="Directory"
          size="--"
          lastModified="Dec 09, 2024"
        >
          <TableRow
            label="data_structures.py"
            icon={FileText}
            type="Python"
            size="4.2 KB"
            lastModified="Dec 08, 2024"
          />
          <TableRow
            label="sorting.cpp"
            icon={FileText}
            type="C++"
            size="3.1 KB"
            lastModified="Dec 07, 2024"
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
        />
        <TableRow
          label="work_history.json"
          icon={FileText}
          type="JSON"
          size="2.8 KB"
          lastModified="Dec 09, 2024"
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
        />
        <TableRow
          label="email"
          icon={Mail}
          type="Link"
          size="--"
          lastModified="Dec 11, 2024"
        />
      </TableRow>
    </>
  );
}
