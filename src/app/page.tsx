import Art from "@/components/AsciiArt";
import FileExplorer from "@/components/explorer/FileExplorer";
import SocialIcon from "@/components/SocialIcon";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* ASCII Art Header */}
      <div className="overflow-x-auto">
        <Art />
      </div>

      {/* Header section with responsive layout */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          ~/Edrick-Koda/Portfolio
        </h1>

        {/* Social links - row on mobile, stays in header row on desktop */}
        <div className="mt-2 md:mt-0 flex space-x-4">
          <SocialIcon
            href="https://github.com/KodaEd"
            icon={Github}
            label="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/in/koda-edrick-aa52a0237"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialIcon
            href="mailto:contact@edrickkoda.com"
            icon={Mail}
            label="Email"
          />
          <SocialIcon href="/resume.pdf" icon={FileText} label="Resume" />
        </div>
      </div>

      {/* File Explorer */}
      <div className="mt-6 overflow-x-auto">
        <FileExplorer />
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t text-sm md:text-base">
        KodaSystems/7.7 Server at www.edrickkoda.com Port 80
      </div>
    </div>
  );
}
