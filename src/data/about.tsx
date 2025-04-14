import { User, GraduationCap, FileText } from "lucide-react";
import { FileItem } from "@/components/explorer/types";

const Background = () => (
  <div className="space-y-4">
    <section>
      <h2 className="text-xl font-bold mb-2">Professional Background</h2>
      <p className="mb-2">
        I am a software developer with a deep appreciation for the logical and
        deterministic nature of programming. My journey in technology has been
        driven by a fascination with how code can transform complex problems
        into structured solutions.
      </p>
      <p>
        Currently working at 38 Social, I specialize in developing tailored
        technological solutions for clients while focusing on backend
        development and system architecture.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Professional Philosophy</h3>
      <p className="mb-2">
        My approach to software development is grounded in the belief that the
        best technical solutions come from a thorough understanding of
        non-technical problems. I excel at:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Breaking down complex business requirements into actionable technical
          specifications
        </li>
        <li>
          Bridging the gap between client needs and technical implementation
        </li>
        <li>Creating scalable, maintainable backend solutions</li>
        <li>
          Facilitating clear communication between technical and non-technical
          stakeholders
        </li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Technical Focus</h3>
      <p className="mb-2">
        My primary focus lies in backend web development, where I enjoy:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Designing and implementing robust API architectures</li>
        <li>Creating efficient database schemas and queries</li>
        <li>Developing scalable server-side solutions</li>
        <li>Implementing secure and performant backend systems</li>
      </ul>
    </section>
  </div>
);

const Education = () => (
  <div className="space-y-4">
    <section>
      <h2 className="text-xl font-bold mb-2">
        University of New South Wales (UNSW)
      </h2>
      <p className="italic">Bachelor of Science in Computer Science</p>
      <p className="italic mb-3">2022 - 2024</p>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Academic Performance</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Overall WAM (Weighted Average Mark): 74.48</li>
        <li>Program: Computer Science (3778)</li>
        <li>Status: Completed December 2024</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Technical Strengths</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Strong performance in programming courses, particularly in advanced
          languages (C++, Rust)
        </li>
        <li>Excellence in software testing and quality assurance</li>
        <li>Solid foundation in database systems and web development</li>
        <li>
          Proficiency in user interface design and human-computer interaction
        </li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Key Coursework</h3>

      <h4 className="font-bold mt-3 mb-1">
        Programming & Software Development
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Programming Fundamentals (HD - 87%)</li>
        <li>Software Engineering Fundamentals (DN - 83%)</li>
        <li>Object-Oriented Design & Programming (CR - 71%)</li>
        <li>Web Front-End Programming (DN - 81%)</li>
        <li>Advanced C++ Programming (HD - 88%)</li>
        <li>Modern Programming with Rust (HD - 89%)</li>
        <li>Software Testing and QA (HD - 86%)</li>
      </ul>

      <h4 className="font-bold mt-3 mb-1">Computer Science Core</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Data Structures and Algorithms (CR - 71%)</li>
        <li>Algorithm Design and Analysis (DN - 79%)</li>
        <li>Operating Systems (DN - 77%)</li>
        <li>Computer Networks & Applications (DN - 82%)</li>
        <li>Database Systems (HD - 85%)</li>
      </ul>
    </section>
  </div>
);

export const aboutItems: Record<string, FileItem> = {
  about_me: {
    id: "about_me",
    label: "about_me",
    icon: User,
    type: "Directory",
    size: "2.4 KB",
    lastModified: "Dec 10, 2024",
    defaultOpen: true,
    children: {
      "background.md": {
        id: "about_me/background.md",
        label: "background.md",
        icon: FileText,
        type: "Text",
        size: "1.2 KB",
        lastModified: "Dec 09, 2024",
        content: <Background />,
      },
      "education.md": {
        id: "about_me/education.md",
        label: "education.md",
        icon: GraduationCap,
        type: "Text",
        size: "1.2 KB",
        lastModified: "Dec 09, 2024",
        content: <Education />,
      },
    },
  },
};
