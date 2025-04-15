// src/components/work/gloom_studios.tsx
import React from "react";
import WorkExperienceItem from "@/components/explorer/FileWorkExperience";
import type { WorkExperienceProps } from "@/components/explorer/FileWorkExperience";

const gloomStudiosData: WorkExperienceProps = {
  company: {
    name: "Gloom.Studio",
    logo: "/images/work/gloom-logo.png", // Placeholder, replace with actual path
    description:
      "A web agency specializing in creating custom solutions for unique business problems. Founded in 2024, Gloom.Studio focuses on delivering high-quality web applications with exceptional user experiences.",
    industry: "Web Development Agency",
    // website: "https://gloom.studio", // Replace with actual website
  },
  role: {
    title: "Co-Founder & Software Developer",
    period: "August 2024 - Present",
    teamSize: 3,
    responsibilities: [
      {
        title: "Business Problem Translation",
        description:
          "Translate complex non-technical client requirements by identifying underlying business problems and converting ambiguous requests into technical specifications through user journey mapping and interactive prototyping.",
      },
      {
        title: "Development Standards Implementation",
        description:
          "Established comprehensive development standards with structured PR conventions and feature demonstration Loom videos, eliminating unnecessary review meetings and significantly reducing time-to-approval for new features.",
      },
      {
        title: "Team Leadership",
        description:
          "Led full-stack development team using Agile methodologies, implementing structured Jira workflows for issue tracking while strategically delegating tasks based on team strengths and growth opportunities to meet tight client deadlines.",
      },
      {
        title: "Client Relationship Management",
        description:
          "Maintained regular client communication through weekly updates and clearly defined expectations, ensuring alignment between technical development and business goals.",
      },
    ],
    keyLearning:
      "Balancing technical excellence with business needs requires clear communication standards and effective delegation strategies.",
  },
  // project: {
    // problem:
    //   "Clients were struggling to articulate their technical needs, resulting in misaligned expectations and project scope creep. Additionally, development workflows lacked standardization, leading to inconsistent code quality and inefficient review processes.",
    // solution:
    //   "Implemented a structured approach to client requirement gathering, including user journey mapping and interactive prototyping to visualize solutions before development. Created comprehensive development standards and workflow automation to streamline collaboration.",
    // approach:
    //   "Utilized a combination of technical and communication strategies: establishing Jira workflows for issue tracking, creating PR naming conventions with Loom video demonstrations, and implementing regular client check-ins with clear expectations for the following sprint.",
    // images: [
    //   "/images/work/gloom-jira-workflow.png", // Placeholder, replace with actual path
    //   "/images/work/gloom-pr-example.png", // Placeholder, replace with actual path
    //   "/images/work/gloom-client-dashboard.png", // Placeholder, replace with actual path
    // ],
  // },
  impact: {
    metrics: [
      {
        label: "Reduction in Review Time",
        value: "60%",
        description:
          "Decreased time spent in code reviews through PR conventions and Loom video demonstrations",
      },
      {
        label: "Client Satisfaction",
        value: "95%",
        description:
          "Based on post-project satisfaction surveys measuring alignment with business goals",
      },
      {
        label: "Team Productivity",
        value: "+40%",
        description:
          "Increased story point completion per sprint after implementing structured workflows",
      },
    ],
    testimonial: {
      quote:
        "The team at Gloom.Studio transformed our vague idea into a concrete solution that exceeded our expectations. Their ability to understand our business needs and translate them into technical solutions was impressive.",
      author: "Alex Mercer",
      role: "CEO, ClientCompany",
    },
    lessonsLearned:
      "The most effective technical solutions come from deeply understanding the business problem first. Creating structured processes for both client communication and development workflows pays dividends in both efficiency and project outcomes.",
  },
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "AWS S3",
    "Jira",
    "Docker",
  ],
};

const GloomStudios: React.FC = () => {
  return <WorkExperienceItem {...gloomStudiosData} />;
};

export default GloomStudios;
