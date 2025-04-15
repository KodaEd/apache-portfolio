// src/data/work/sydney_scholars.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import ProjectImageCarousel from "@/components/ImageCarousel";

const SydneyScholarsProject: React.FC = () => {
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
                src="/images/work/sydney-scholars/logo.png"
                alt="Sydney Scholars logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sydney Scholars</h2>
              <p>Education</p>
            </div>
          </div>
          <a
            href="https://sydneyscholars.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
          >
            <span>Visit</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Project Images Carousel */}
        <ProjectImageCarousel
          images={[
            "/images/work/sydney-scholars-dashboard.png",
            "/images/work/sydney-scholars-report-flow.png",
            "/images/work/sydney-scholars-permissions.png",
          ]}
        />
      </div>

      {/* Role Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              Software Developer
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span className="text-sm">March 2025 - Present</span>
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
              <h3 className="font-medium text-lg">Responsibilities</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-medium">System Architecture</h4>
                  <p>
                    Architected a streamlined student reports system, replacing
                    manual email-based processes with an automated workflow that
                    reduced administrative overhead by 70%.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Access Control Implementation</h4>
                  <p>
                    Designed and built a permission-based access system using
                    TypeScript, React, and Node.js to ensure data security while
                    allowing appropriate visibility for tutors, administrators,
                    and parents.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Process Digitization</h4>
                  <p>
                    Collaborated with stakeholders to translate manual
                    email-based processes into intuitive digital workflows,
                    significantly reducing report approval time from days to
                    hours.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Database Design</h4>
                  <p>
                    Created an efficient database schema to store student
                    reports, feedback, and approval status, ensuring data
                    integrity and performance across the platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-800">Key Learning</h4>
              <p className="text-blue-700">
                Digitizing manual processes requires deep understanding of
                existing workflows and careful consideration of user roles and
                permissions to ensure adoption.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sydney Scholar&apos;s reporting process was entirely manual:
                administrators would request reports from tutors via email,
                download attachments, review them, approve or request changes
                via email, and finally forward approved reports to parents. This
                process was time-consuming, error-prone, and lacked
                transparency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developed a comprehensive digital platform that automates the
                entire reporting workflow, from report creation to final
                delivery, with role-based permissions ensuring appropriate
                access for tutors, administrators, and parents.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Approach</h4>
                <p>
                  Took an iterative approach, first mapping the existing process
                  in detail, then designing a digital workflow that maintained
                  familiar elements while automating repetitive tasks.
                  Implemented a role-based permission system to ensure data
                  security and appropriate access.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Impact Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Impact & Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">-70%</div>
              <div className="text-lg font-medium mt-2">
                Administrative Overhead
              </div>
              <p className="mt-2 text-sm">
                Reduction in time spent on manual report handling and email
                communication
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">4 hrs</div>
              <div className="text-lg font-medium mt-2">
                Report Approval Time
              </div>
              <p className="mt-2 text-sm">
                Average time from submission to approval, down from 3 days in
                the previous system
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-lg font-medium mt-2">
                Reporting Compliance
              </div>
              <p className="mt-2 text-sm">
                Percentage of tutors submitting reports on time, up from 65%
                with the manual system
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">Lessons Learned</h4>
          <p>
            Successful digital transformation requires maintaining the core
            functions users are familiar with while automating the repetitive
            parts. The permission system was more complex than initially
            anticipated, but investment in this area paid off by ensuring data
            security and appropriate access levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SydneyScholarsProject;
