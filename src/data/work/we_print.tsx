// src/components/work/client_project_we_print.tsx
import React from "react";
import WorkExperienceItem from "@/components/explorer/FileWorkExperience";
import type { WorkExperienceProps } from "@/components/explorer/FileWorkExperience";

const wePrintData: WorkExperienceProps = {
  company: {
    name: "We-Print",
    logo: "/images/work/we-print/logo.png", // Placeholder, replace with actual path
    description:
      "A printing company specializing in custom print materials for businesses and individuals. We-Print sought to improve their online ordering system to stay competitive in the digital printing market.",
    industry: "Printing Services",
    website: "https://we-print.example.com", // Replace with actual website if available
  },
  role: {
    title: "Software Developer",
    period: "January 2025 - March 2025",
    teamSize: 4,
    responsibilities: [
      {
        title: "Frontend Development",
        description:
          "Built responsive user interfaces using NextJS, React, and Fabric.js, focusing on creating an intuitive web-based editor for designing custom print products.",
      },
      {
        title: "E-Commerce Integration",
        description:
          "Implemented MedusaJS e-commerce framework and Stripe payment processing to enable seamless ordering and payment experiences.",
      },
      {
        title: "Performance Optimization",
        description:
          "Enhanced user experience by implementing skeleton screens and loading states, while optimizing API calls to significantly improve application responsiveness.",
      },
      {
        title: "User Experience Design",
        description:
          "Collaborated with designers to refine the user journey through the editor, focusing on minimizing UI clutter and maximizing usability based on direct user feedback.",
      },
    ],
    keyLearning:
      "Sometimes the most effective technical solutions are the simplest ones. Adding skeleton loading states had more impact on perceived performance than complex backend optimizations.",
  },
  project: {
    name: "Custom Print Editor Platform",
    problem:
      "We-Print's competitors had online editors, but they were complex and confusing for users, leading to abandoned carts and frustrated customers. The client needed a simplified solution that maintained all necessary functionality while providing a more intuitive experience.",
    solution:
      "Developed an intuitive e-commerce platform with an integrated web-based editor that allows customers to design, customize, and order print products through a streamlined interface with minimal clutter.",
    approach:
      "Adopted a user-centered design approach with rapid prototyping and testing cycles. Focused on reducing UI complexity while maintaining full functionality, and implemented strategic loading states to improve perceived performance.",
    images: [
      "/images/work/we-print/SS1.jpg",
      "/images/work/we-print/SS2.jpg",
      "/images/work/we-print/SS3.jpg",
      "/images/work/we-print/SS4.jpg",
    ],
  },
  impact: {
    metrics: [
      {
        label: "Reduced Responsiveness Complaints",
        value: "75%",
        description:
          "Decrease in user complaints about application responsiveness after implementing skeleton screens and loading states",
      },
      {
        label: "API Call Optimization",
        value: "85%",
        description:
          "Reduction in API call size, significantly improving data transfer speeds",
      },
      {
        label: "Cart Abandonment",
        value: "-40%",
        description:
          "Decrease in cart abandonment rate compared to previous system",
      },
    ],
    testimonial: {
      quote:
        "The new editor is exactly what we needed - simple enough for our less tech-savvy customers but powerful enough for complex designs. The loading improvements made the whole experience feel much faster.",
      author: "Sarah Johnson",
      role: "Marketing Director, We-Print",
    },
    lessonsLearned:
      "User perception is just as important as actual performance metrics. The project reinforced that reducing UI complexity and adding thoughtful loading states can dramatically improve user satisfaction, sometimes more than backend optimizations.",
  },
  techStack: [
    "React",
    "NextJS",
    "Fabric.js",
    "TypeScript",
    "MedusaJS",
    "Stripe",
    "Tailwind CSS",
    "Node.js",
  ],
};

const WePrintProject: React.FC = () => {
  return <WorkExperienceItem {...wePrintData} />;
};

export default WePrintProject;
