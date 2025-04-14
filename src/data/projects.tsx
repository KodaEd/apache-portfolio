import { Folder, Code, FileText } from "lucide-react";
import { FileItem } from "@/components/explorer/types";

const WeatherDashboard = () => (
  <div className="space-y-6">
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">React Weather Dashboard</h2>
      <div className="space-y-2">
        <p>A modern weather application built with React and Next.js</p>
        <div className="flex flex-wrap gap-2">
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

const ProjectNotes = () => (
  <div className="space-y-4">
    <section>
      <h2 className="text-xl font-bold mb-2">Architecture Overview</h2>
      <p className="mb-2">
        The application follows a modern microservices architecture with the
        following components:
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Frontend</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>React.js with Next.js for server-side rendering</li>
        <li>TailwindCSS for styling</li>
        <li>Redux Toolkit for state management</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Backend</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Node.js microservices</li>
        <li>GraphQL API gateway</li>
        <li>PostgreSQL database</li>
        <li>Redis for caching</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Deployment</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Containerized with Docker</li>
        <li>Hosted on AWS ECS</li>
        <li>CI/CD pipeline using GitHub Actions</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>98/100 Lighthouse score</li>
        <li>&lt;100ms server response time</li>
        <li>99.9% uptime</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold mb-2">Future Improvements</h3>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Implement WebSocket connections</li>
        <li>Add real-time analytics</li>
        <li>Enhance mobile responsiveness</li>
      </ol>
    </section>
  </div>
);

export const projectItems: Record<string, FileItem> = {
  projects: {
    id: "projects",
    label: "projects",
    icon: Folder,
    type: "Directory",
    size: "--",
    lastModified: "Dec 11, 2024",
    children: {
      web_development: {
        id: "projects/web_development",
        label: "web_development",
        icon: Folder,
        type: "Directory",
        size: "--",
        lastModified: "Dec 11, 2024",
        children: {
          "weather_dashboard.html": {
            id: "projects/web_development/weather_dashboard.html",
            label: "weather_dashboard.html",
            icon: Code,
            type: "HTML",
            size: "4.5 KB",
            lastModified: "Dec 11, 2024",
            content: <WeatherDashboard />,
          },
          "project_notes.md": {
            id: "projects/web_development/project_notes.md",
            label: "project_notes.md",
            icon: FileText,
            type: "Text",
            size: "2.1 KB",
            lastModified: "Dec 10, 2024",
            content: <ProjectNotes />,
          },
        },
      },
    },
  },
};
