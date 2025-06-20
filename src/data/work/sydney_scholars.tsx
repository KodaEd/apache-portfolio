import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";
import Image from "next/image";
import ProjectImageCarousel from "@/components/ImageCarousel";

const SydneyScholarsProject: React.FC = () => {
  return (
    <div className="space-y-6 py-6">
      {/* Header Section */}
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
              <h2 className="text-3xl font-bold">Sydney Scholars</h2>
              <p className="text-gray-600">Educational Technology Platform</p>
              <p className="text-sm text-gray-500">
                Contract Project • 3-Developer Team
              </p>
            </div>
          </div>
        </div>

        {/* Project Preview Images */}
        <ProjectImageCarousel
          images={[
            // "/images/work/sydney-scholars/SS1.jpg",
            "/images/work/sydney-scholars/SS1-5.jpg",
            "/images/work/sydney-scholars/SS2.jpg",
            "/images/work/sydney-scholars/SS3.jpg",
            "/images/work/sydney-scholars/SS4.jpg",
            "/images/work/sydney-scholars/SS5.jpg",
            "/images/work/sydney-scholars/SS6.jpg",
            "/images/work/sydney-scholars/SS7.jpg",
          ]}
        />
      </div>

      {/* Role Overview */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Full-Stack Developer
              </CardTitle>
              <CardDescription className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>April 2025 - May 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>3-Person Development Team</span>
                </div>
              </CardDescription>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div className="font-semibold">2 Month Sprint</div>
              <div>Contract Delivery</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-2">
              Project Mission
            </h4>
            <p className="text-blue-800">
              Transform Sydney Scholars&apos; manual, email-based reporting system
              into a streamlined digital platform that automates workflows and
              improves communication between tutors, administrators, and
              parents.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Challenge & Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-lg text-red-800 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>The Challenge</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-red-700">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p>Manual email chains between 20+ tutors and administrators</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p>3-day average processing time for report approvals</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p>
                  Lost reports, version confusion, and delayed parent updates
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p>No centralized tracking or accountability system</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>My Solution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-green-700">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p>Digital platform with role-based access control</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p>Automated approval workflows and notifications</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p>Real-time status tracking and progress visibility</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p>Seamless parent delivery via automated emails</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technical Approach */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Technical Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Technology Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-center">
                  <div className="font-medium text-blue-800">Frontend</div>
                  <div className="text-sm text-blue-600">React Remix</div>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg text-center">
                  <div className="font-medium text-purple-800">Language</div>
                  <div className="text-sm text-purple-600">TypeScript</div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg text-center">
                  <div className="font-medium text-green-800">Database</div>
                  <div className="text-sm text-green-600">PostgreSQL</div>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg text-center">
                  <div className="font-medium text-orange-800">Testing</div>
                  <div className="text-sm text-orange-600">
                    Jest & Playwright
                  </div>
                </div>
              </div>
            </div>

            {/* Key Development Areas */}
            <div>
              <h4 className="font-semibold text-lg mb-3">
                Development Focus Areas
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-medium">User Experience Design</h5>
                  <p className="text-gray-600 text-sm">
                    Translated Figma designs into responsive, intuitive
                    interfaces tailored for different user roles
                    (administrators, tutors, parents)
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-medium">System Architecture</h5>
                  <p className="text-gray-600 text-sm">
                    Built secure, modular data flows with role-based permissions
                    ensuring appropriate access control across all user types
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h5 className="font-medium">Quality Assurance</h5>
                  <p className="text-gray-600 text-sm">
                    Achieved 99% test coverage through comprehensive unit and
                    integration testing to ensure system reliability
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h5 className="font-medium">Iterative Improvement</h5>
                  <p className="text-gray-600 text-sm">
                    Led feedback sessions with tutors and administrators to
                    continuously refine the platform based on real-world usage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results & Impact */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Project Impact</h3>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="overflow-hidden relative">
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600" />
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">
                    6 hours
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    Processing Time
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Down from 3 days in the manual system
                  </p>
                </div>
                <Clock className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-lg font-semibold mt-1">
                    User Adoption
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    All tutors and staff embraced the new system
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600" />
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">99%</div>
                  <div className="text-lg font-semibold mt-1">
                    Test Coverage
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Comprehensive testing for system reliability
                  </p>
                </div>
                <Target className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Impact
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-lg mb-4">Additional Outcomes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">
                    80% reduction in approval loops
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">
                    Eliminated email chain confusion
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Real-time progress visibility</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">
                    Automated parent notifications
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">
                    Centralized administrative control
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Improved tutor productivity</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>

      {/* Personal Reflection */}
      <Card className="border-l-4 border-l-indigo-500 bg-indigo-50">
        <CardContent className="pt-6">
          <h4 className="font-bold text-lg text-indigo-900 mb-3">
            Personal Takeaways
          </h4>
          <div className="space-y-3 text-indigo-800">
            <p>
              This project reinforced the importance of{" "}
              <strong>user-centered design</strong> in digital transformation.
              By closely collaborating with tutors and administrators, I learned
              that successful platform adoption depends as much on understanding
              existing workflows as it does on technical implementation.
            </p>
            <p>
              The emphasis on <strong>comprehensive testing</strong> paid
              dividends - achieving 99% coverage gave both the client and our
              team confidence in the system&apos;s reliability, leading to seamless
              deployment and immediate user adoption.
            </p>
            <p>
              Working with <strong>role-based permissions</strong> was more
              complex than initially anticipated, but investing time in proper
              access control architecture created a secure, scalable foundation
              that will serve Sydney Scholars well as they grow.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SydneyScholarsProject;
