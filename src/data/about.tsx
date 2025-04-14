// src/data/about.tsx - Fixed version
import { User } from "lucide-react";
import { FileItem } from "@/components/explorer/types";
import Link from "next/link";

const AboutContent = () => (
  <div className="space-y-4">
    <section>
      <h1 className="text-2xl font-bold mb-2">Introduction</h1>
      <p className="mb-2">
        Based in Sydney, I am currently developing custom web solutions at Gloom
        Studio{" "}
        <Link
          href="https://example.com"
          className="text-blue-600 hover:underline"
        >
          (Web Agency)
        </Link>
        , where I transform client requirements into technical solutions.
      </p>
      <p>
        I excel at bridging business challenges with software solutions, turning
        abstract concepts into reliable, scalable systems that drive meaningful
        outcomes.
      </p>
    </section>

    <section className="mt-4">
      <h1 className="text-2xl font-bold mb-2">Education</h1>
      <div>
        <p className="text-xl font-bold">University of New South Wales</p>
        <p>BS Computer Science, 2022-2024</p>
      </div>
    </section>

    <section className="mt-4">
      <h3 className="text-2xl font-bold mb-2">Professional Approach</h3>
      {/* Changed to <ul> for bullet points with list-disc */}
      <ul className="list-disc pl-5">
        <li>
          Translate complex requirements into actionable software solutions
        </li>
        <li>
          Bridge communication gaps between stakeholders and development teams
        </li>
        <li>
          Continuously adapt and learn across diverse technology ecosystems
        </li>
        <li>
          Optimize processes through strategic problem-solving and innovation
        </li>
      </ul>
    </section>
  </div>
);

export const aboutItems: Record<string, FileItem> = {
  about_me: {
    id: "about_me.md",
    label: "about_me.md",
    icon: User,
    type: "Markdown",
    size: "2.4 KB",
    lastModified: "14 April, 2025",
    defaultOpen: true,
    content: <AboutContent />,
  },
};
