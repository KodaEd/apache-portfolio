import React from "react";
// import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink, Users } from "lucide-react";
import Image from "next/image";

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Responsibility {
  title: string;
  description: string;
}

export interface WorkExperienceProps {
  company: {
    name: string;
    logo?: string;
    description: string;
    industry?: string;
    website?: string;
  };
  role: {
    title: string;
    period: string;
    teamSize?: number;
    responsibilities: Responsibility[];
    keyLearning?: string;
  };
  project?: {
    name?: string;
    problem?: string;
    solution?: string;
    approach?: string;
    images?: string[];
  };
  impact: {
    metrics: Metric[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
    lessonsLearned?: string;
  };
  techStack: string[];
}

const WorkExperienceItem: React.FC<WorkExperienceProps> = ({
  company,
  role,
  project,
  impact,
  // techStack,
}) => {
  return (
    <div className="space-y-4 py-6">
      {/* Company Overview Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {company.logo && (
              <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold">{company.name}</h2>
              {company.industry && <p>{company.industry}</p>}
            </div>
          </div>
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
            >
              <span>Visit</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        {project && project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="h-48 rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  width={100}
                  height={100}
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Role Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              {role.title}
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span className="text-sm">{role.period}</span>
            </div>
          </div>
          {role.teamSize && (
            <CardDescription className="flex items-center space-x-1">
              <Users size={16} />
              <span>Team of {role.teamSize}</span>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Responsibilities</h3>
              <div className="space-y-4">
                {role.responsibilities.map((responsibility, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium">{responsibility.title}</h4>
                    <p>{responsibility.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {role.keyLearning && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800">Key Learning</h4>
                <p className="text-blue-700">{role.keyLearning}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Project Section */}
      {project && (
        <div className="space-y-4">
          {project.name && (
            <h3 className="text-xl font-semibold">{project.name}</h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.problem}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.solution}</p>
                {project.approach && (
                  <div className="mt-4">
                    <h4 className="font-medium">Approach</h4>
                    <p>{project.approach}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Impact Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Impact & Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {impact.metrics.map((metric, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">{metric.value}</div>
                <div className="text-lg font-medium mt-2">{metric.label}</div>
                {metric.description && (
                  <p className=" mt-2 text-sm">{metric.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* {impact.testimonial && (
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="py-6">
              <blockquote className="italic ">
                &quot;{impact.testimonial.quote}&quot;
              </blockquote>
              <div className="mt-4">
                <div className="font-medium">{impact.testimonial.author}</div>
                <div className=" text-sm">{impact.testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        )}
        {impact.lessonsLearned && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="font-medium mb-2">Lessons Learned</h4>
            <p>{impact.lessonsLearned}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
