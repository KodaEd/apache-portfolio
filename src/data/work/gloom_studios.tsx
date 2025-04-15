import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";

const GloomStudios: React.FC = () => {
  return (
    <div className="space-y-4 py-6">
      {/* Company Overview Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/images/work/gloom-studios/logo.png"
                alt="Gloom.Studio logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Gloom.Studio</h2>
              <p>Web Development Agency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              Co-Founder & Software Developer
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span className="text-sm">August 2024 - Present</span>
            </div>
          </div>
          <CardDescription className="flex items-center space-x-1">
            <Users size={16} />
            <span>Team of 3</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-bold text-2xl">Responsibilities</h3>
              <ul className="space-y-4 list-disc pl-5">
                <li>
                  <h4 className="font-semibold text-lg">
                    Business Problem Translation
                  </h4>
                  <p>
                    Translate complex non-technical client requirements by
                    identifying underlying business problems and converting
                    ambiguous requests into technical specifications through
                    user journey mapping and interactive prototyping.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-lg">
                    Development Standards Implementation
                  </h4>
                  <p>
                    Established comprehensive development standards with
                    structured PR conventions and feature demonstration Loom
                    videos, eliminating unnecessary review meetings and
                    significantly reducing time-to-approval for new features.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-lg">Team Leadership</h4>
                  <p>
                    Led full-stack development team using Agile methodologies,
                    implementing structured Jira workflows for issue tracking
                    while strategically delegating tasks based on team strengths
                    and growth opportunities to meet tight client deadlines.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-lg">
                    Client Relationship Management
                  </h4>
                  <p>
                    Maintained regular client communication through weekly
                    updates and clearly defined expectations, ensuring alignment
                    between technical development and business goals.
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-bold text-lg text-blue-800">Key Learning</h4>
              <p className="text-blue-700">
                Balancing technical excellence with business needs requires
                clear communication standards and effective delegation
                strategies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Impact & Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-lg font-semibold mt-2">
                Reduction in Review Time
              </div>
              <p className="mt-2 text-sm">
                Decreased time spent in code reviews through PR conventions and
                Loom video demonstrations
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-lg font-semibold mt-2">
                Client Satisfaction
              </div>
              <p className="mt-2 text-sm">
                Based on post-project satisfaction surveys measuring alignment
                with business goals
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">+40%</div>
              <div className="text-lg font-semibold mt-2">
                Team Productivity
              </div>
              <p className="mt-2 text-sm">
                Increased story point completion per sprint after implementing
                structured workflows
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h4 className="font-bold text-xl mb-2">Lessons Learned</h4>
          <p>
            The most effective technical solutions come from deeply
            understanding the business problem first. Creating structured
            processes for both client communication and development workflows
            pays dividends in both efficiency and project outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GloomStudios;
