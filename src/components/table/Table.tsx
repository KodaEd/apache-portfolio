"use client";
import TableRow from "@/components/table/TableRow";
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
  BriefcaseBusiness,
  Linkedin,
  Scroll,
} from "lucide-react";

// Example React Component for project showcase
const ProjectShowcase = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">React Weather Dashboard</h2>
        <div className="space-y-2">
          <p>A modern weather application built with React and Next.js</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
              React
            </span>
            <span className="px-2 py-1 bg-black text-white rounded text-sm">
              Next.js
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold">Key Features:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Real-time weather data integration</li>
          <li>Interactive radar maps</li>
          <li>7-day forecast with detailed metrics</li>
          <li>Location-based automatic updates</li>
        </ul>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-600">
          View the live demo at:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            demo.weather-app.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default function Table() {
  return (
    <>
      <TableRow
        label="about_me"
        icon={User}
        defaultOpen={true}
        type="Directory"
        size="2.4 KB"
        lastModified="Dec 10, 2024"
      >
        <TableRow
          label="background.md"
          icon={Scroll}
          type="Markdown"
          size="1.2 KB"
          lastModified="Dec 09, 2024"
          content={`# Professional Background

## Overview
I am a software developer with a deep appreciation for the logical and deterministic nature of programming. My journey in technology has been driven by a fascination with how code can transform complex problems into structured solutions. Currently working at 38 Social, I specialize in developing tailored technological solutions for clients while focusing on backend development and system architecture.

## Professional Philosophy
My approach to software development is grounded in the belief that the best technical solutions come from a thorough understanding of non-technical problems. I excel at:
- Breaking down complex business requirements into actionable technical specifications
- Bridging the gap between client needs and technical implementation
- Creating scalable, maintainable backend solutions
- Facilitating clear communication between technical and non-technical stakeholders

## Technical Focus
My primary focus lies in backend web development, where I enjoy:
- Designing and implementing robust API architectures
- Creating efficient database schemas and queries
- Developing scalable server-side solutions
- Implementing secure and performant backend systems

## Current Role at 38 Social
As a developer at 38 Social, I:
- Work directly with clients to understand their technical needs
- Transform business requirements into practical technical solutions
- Develop and maintain web applications with a focus on backend functionality
- Collaborate with team members to deliver comprehensive digital solutions

## Career Trajectory
### Short-term Goals (1-2 Years)
- Deepen expertise in backend development and API design
- Take on more leadership in technical solution architecture
- Expand knowledge in scalable web application development
- Lead more client-facing technical consultations

### Long-term Goals (3-5 Years)
- Progress into a Technical Lead role
- Develop expertise in enterprise-level system architecture
- Build a strong portfolio of successful client solution implementations
- Potentially transition into a Solutions Architect role

## Key Strengths
- Strong analytical thinking and problem-solving abilities
- Exceptional skill in translating business requirements into technical specifications
- Deep understanding of backend development principles
- Effective communication with both technical and non-technical stakeholders
- Natural ability to break down complex problems into manageable components

## Professional Interests
- Backend system architecture and design
- API development and integration
- Client solution consulting
- Technical requirement analysis
- Scalable web application development`}
        />
        <TableRow
          label="education.md"
          icon={GraduationCap}
          type="Markdown"
          size="1.2 KB"
          lastModified="Dec 09, 2024"
          content={`# Education

## University of New South Wales (UNSW)
**Bachelor of Science in Computer Science**  
*2022 - 2024*

### Academic Performance
- Overall WAM (Weighted Average Mark): 74.48
- Program: Computer Science (3778)
- Status: Completed December 2024

### Technical Strengths
- Strong performance in programming courses, particularly in advanced languages (C++, Rust)
- Excellence in software testing and quality assurance
- Solid foundation in database systems and web development
- Proficiency in user interface design and human-computer interaction

### Key Coursework

#### Programming & Software Development
- Programming Fundamentals (HD - 87%)
- Software Engineering Fundamentals (DN - 83%)
- Object-Oriented Design & Programming (CR - 71%)
- Web Front-End Programming (DN - 81%)
- Advanced C++ Programming (HD - 88%)
- Modern Programming with Rust (HD - 89%)
- Software Testing and QA (HD - 86%)

#### Computer Science Core
- Data Structures and Algorithms (CR - 71%)
- Algorithm Design and Analysis (DN - 79%)
- Operating Systems (DN - 77%)
- Computer Networks & Applications (DN - 82%)
- Database Systems (HD - 85%)

#### Specialized Areas
- Artificial Intelligence (PS - 58%)
- Human Computer Interaction (DN - 78%)
- User Interface Design & Construction (CR - 69%)

#### Mathematics Foundation
- Mathematics 1A (PS - 62%)
- Mathematics 1B (PS - 56%)
- Discrete Mathematics (CR - 67%)

### Notable Projects
- Computer Science Project (CR - 73%)
- Software Construction (DN - 75%)

*Note: Grades Legend*  
HD: High Distinction (85-100)  
DN: Distinction (75-84)  
CR: Credit (65-74)
PS: Pass (50-64)`}
        />
      </TableRow>
      <TableRow
        label="work_experience"
        icon={Folder}
        defaultOpen={true}
        type="Directory"
        size="--"
        lastModified="Dec 11, 2024"
      >
        <TableRow
          label="Things to do"
          icon={Folder}
          defaultOpen={true}
          type="Directory"
          size="--"
          lastModified="Dec 11, 2024"
        />
      </TableRow>
      <TableRow
        label="projects"
        icon={Folder}
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
            content={ProjectShowcase}
          />
          <TableRow
            label="project_notes.md"
            icon={FileText}
            type="Markdown"
            size="2.1 KB"
            lastModified="Dec 10, 2024"
            content={`# Project Development Notes

## Architecture Overview
The application follows a modern microservices architecture with the following components:

### Frontend
- React.js with Next.js for server-side rendering
- TailwindCSS for styling
- Redux Toolkit for state management

### Backend
- Node.js microservices
- GraphQL API gateway
- PostgreSQL database
- Redis for caching

## Deployment
- Containerized with Docker
- Hosted on AWS ECS
- CI/CD pipeline using GitHub Actions

## Performance Metrics
- 98/100 Lighthouse score
- <100ms server response time
- 99.9% uptime

## Future Improvements
1. Implement WebSocket connections
2. Add real-time analytics
3. Enhance mobile responsiveness`}
          />
        </TableRow>
      </TableRow>

      <TableRow
        label="contact"
        icon={Phone}
        type="Directory"
        size="--"
        lastModified="Dec 11, 2024"
      >
        <TableRow
          label="linkedin"
          icon={Linkedin}
          type="Link"
          size="--"
          lastModified="Dec 11, 2024"
          link="www.linkedin.com/in/koda-edrick-aa52a0237"
        />
        <TableRow
          label="github"
          icon={Github}
          type="Link"
          size="--"
          lastModified="Dec 11, 2024"
          link="https://github.com/KodaEd"
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
