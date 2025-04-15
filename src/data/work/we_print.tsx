// src/data/work/we_print.tsx
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

const WePrintProject: React.FC = () => {
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
                src="/images/work/we-print/logo.png"
                alt="We-Print logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">We-Print</h2>
              <p>Printing Services</p>
            </div>
          </div>
          <a
            href="https://we-print.example.com"
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
            "/images/work/we-print/SS1.jpg",
            "/images/work/we-print/SS2.jpg",
            "/images/work/we-print/SS3.jpg",
            "/images/work/we-print/SS4.jpg",
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
              <span className="text-sm">January 2025 - March 2025</span>
            </div>
          </div>
          <CardDescription className="flex items-center space-x-1">
            <Users size={16} />
            <span>Team of 4</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Responsibilities</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-medium">Frontend Development</h4>
                  <p>
                    Built responsive user interfaces using NextJS, React, and
                    Fabric.js, focusing on creating an intuitive web-based
                    editor for designing custom print products.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">E-Commerce Integration</h4>
                  <p>
                    Implemented MedusaJS e-commerce framework and Stripe payment
                    processing to enable seamless ordering and payment
                    experiences.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Performance Optimization</h4>
                  <p>
                    Enhanced user experience by implementing skeleton screens
                    and loading states, while optimizing API calls to
                    significantly improve application responsiveness.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">User Experience Design</h4>
                  <p>
                    Collaborated with designers to refine the user journey
                    through the editor, focusing on minimizing UI clutter and
                    maximizing usability based on direct user feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-800">Key Learning</h4>
              <p className="text-blue-700">
                Sometimes the most effective technical solutions are the
                simplest ones. Adding skeleton loading states had more impact on
                perceived performance than complex backend optimizations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Custom Print Editor Platform</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We-Print&apos;s competitors had online editors, but they were
                complex and confusing for users, leading to abandoned carts and
                frustrated customers. The client needed a simplified solution
                that maintained all necessary functionality while providing a
                more intuitive experience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developed an intuitive e-commerce platform with an integrated
                web-based editor that allows customers to design, customize, and
                order print products through a streamlined interface with
                minimal clutter.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Approach</h4>
                <p>
                  Adopted a user-centered design approach with rapid prototyping
                  and testing cycles. Focused on reducing UI complexity while
                  maintaining full functionality, and implemented strategic
                  loading states to improve perceived performance.
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
              <div className="text-3xl font-bold">75%</div>
              <div className="text-lg font-medium mt-2">
                Reduced Responsiveness Complaints
              </div>
              <p className="mt-2 text-sm">
                Decrease in user complaints about application responsiveness
                after implementing skeleton screens and loading states
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">85%</div>
              <div className="text-lg font-medium mt-2">
                API Call Optimization
              </div>
              <p className="mt-2 text-sm">
                Reduction in API call size, significantly improving data
                transfer speeds
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="text-3xl font-bold">-40%</div>
              <div className="text-lg font-medium mt-2">Cart Abandonment</div>
              <p className="mt-2 text-sm">
                Decrease in cart abandonment rate compared to previous system
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">Lessons Learned</h4>
          <p>
            User perception is just as important as actual performance metrics.
            The project reinforced that reducing UI complexity and adding
            thoughtful loading states can dramatically improve user
            satisfaction, sometimes more than backend optimizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WePrintProject;
