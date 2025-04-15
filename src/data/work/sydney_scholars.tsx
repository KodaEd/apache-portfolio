// src/components/work/client_project_sydney_scholars.tsx
import React from "react";
import WorkExperienceItem from "@/components/explorer/FileWorkExperience";
import type { WorkExperienceProps } from "@/components/explorer/FileWorkExperience";

const sydneyScholarsData: WorkExperienceProps = {
  company: {
    name: "Sydney Scholars",
    logo: "/images/work/sydney-scholars/logo.png", // Placeholder, replace with actual path
    description:
      "An educational institution providing tutoring and academic support services to students. Sydney Scholars needed to modernize their student reporting system to improve efficiency and communication between tutors, administrators, and parents.",
    industry: "Education",
    website: "https://sydneyscholars.example.com", // Replace with actual website if available
  },
  role: {
    title: "Software Developer",
    period: "March 2025 - Present",
    teamSize: 3,
    responsibilities: [
      {
        title: "System Architecture",
        description:
          "Architected a streamlined student reports system, replacing manual email-based processes with an automated workflow that reduced administrative overhead by 70%.",
      },
      {
        title: "Access Control Implementation",
        description:
          "Designed and built a permission-based access system using TypeScript, React, and Node.js to ensure data security while allowing appropriate visibility for tutors, administrators, and parents.",
      },
      {
        title: "Process Digitization",
        description:
          "Collaborated with stakeholders to translate manual email-based processes into intuitive digital workflows, significantly reducing report approval time from days to hours.",
      },
      {
        title: "Database Design",
        description:
          "Created an efficient database schema to store student reports, feedback, and approval status, ensuring data integrity and performance across the platform.",
      },
    ],
    keyLearning:
      "Digitizing manual processes requires deep understanding of existing workflows and careful consideration of user roles and permissions to ensure adoption.",
  },
  project: {
    problem:
      "Sydney Scholars' reporting process was entirely manual: administrators would request reports from tutors via email, download attachments, review them, approve or request changes via email, and finally forward approved reports to parents. This process was time-consuming, error-prone, and lacked transparency.",
    solution:
      "Developed a comprehensive digital platform that automates the entire reporting workflow, from report creation to final delivery, with role-based permissions ensuring appropriate access for tutors, administrators, and parents.",
    approach:
      "Took an iterative approach, first mapping the existing process in detail, then designing a digital workflow that maintained familiar elements while automating repetitive tasks. Implemented a role-based permission system to ensure data security and appropriate access.",
    images: [
      "/images/work/sydney-scholars-dashboard.png", // Placeholder, replace with actual path
      "/images/work/sydney-scholars-report-flow.png", // Placeholder, replace with actual path
      "/images/work/sydney-scholars-permissions.png", // Placeholder, replace with actual path
    ],
  },
  impact: {
    metrics: [
      {
        label: "Administrative Overhead",
        value: "-70%",
        description:
          "Reduction in time spent on manual report handling and email communication",
      },
      {
        label: "Report Approval Time",
        value: "4 hrs",
        description:
          "Average time from submission to approval, down from 3 days in the previous system",
      },
      {
        label: "Reporting Compliance",
        value: "98%",
        description:
          "Percentage of tutors submitting reports on time, up from 65% with the manual system",
      },
    ],
    testimonial: {
      quote:
        "The new system has transformed our reporting process completely. What used to take days now takes hours, and we have complete visibility into where reports are in the process. Parents are happier too since they receive reports faster and more consistently.",
      author: "Dr. Emma Richards",
      role: "Academic Director, Sydney Scholars",
    },
    lessonsLearned:
      "Successful digital transformation requires maintaining the core functions users are familiar with while automating the repetitive parts. The permission system was more complex than initially anticipated, but investment in this area paid off by ensuring data security and appropriate access levels.",
  },
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT Authentication",
    "Tailwind CSS",
    "Redux",
  ],
};

const SydneyScholarsProject: React.FC = () => {
  return <WorkExperienceItem {...sydneyScholarsData} />;
};

export default SydneyScholarsProject;
