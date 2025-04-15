import React from "react";

// Reusable content definitions
const content = {
  challenge: [
    "Competitors had complex, confusing online editors",
    "Users abandoned carts and were frustrated",
    "Client needed simplified solution",
    "Had to maintain functionality while being intuitive",
  ],
  approach: [
    "User-centered design approach",
    "Rapid prototyping and testing cycles",
    "Reduced UI complexity while maintaining functionality",
    "Strategic loading states for improved perceived performance",
  ],
  solution: [
    "Intuitive e-commerce platform",
    "Integrated web-based editor",
    "Streamlined design, customization, and ordering",
    "Minimal interface clutter",
  ],
};

// Reusable content renderer
const ContentList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-2 text-black">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const ProcessFlowSection: React.FC = () => {
  return (
    <div className="!my-12">
      <h3 className="text-2xl font-bold">The Process</h3>

      {/* Desktop view (horizontal flow) */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Challenge Card */}
        <div className="flex-1 bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            The Challenge
          </h4>
          <ContentList items={content.challenge} />
        </div>

        {/* SVG Slot - Horizontal */}
        <div className="flex items-center justify-center w-16 h-16">
          <svg
            width="64"
            height="24"
            viewBox="0 0 64 24"
            className="text-blue-500"
          >
            <path
              d="M2,12 H54 M48,4 L62,12 L48,20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Approach Card */}
        <div className="flex-1 bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            The Approach
          </h4>
          <ContentList items={content.approach} />
        </div>

        {/* SVG Slot - Horizontal */}
        <div className="flex items-center justify-center w-16 h-16">
          <svg
            width="64"
            height="24"
            viewBox="0 0 64 24"
            className="text-blue-500"
          >
            <path
              d="M2,12 H54 M48,4 L62,12 L48,20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Solution Card */}
        <div className="flex-1 bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            Our Solution
          </h4>
          <ContentList items={content.solution} />
        </div>
      </div>

      {/* Mobile view (vertical flow) */}
      <div className="md:hidden space-y-4">
        {/* Challenge Card */}
        <div className="bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            The Challenge
          </h4>
          <ContentList items={content.challenge} />
        </div>

        {/* SVG Slot - Vertical */}
        <div className="flex justify-center h-16">
          <svg
            width="24"
            height="64"
            viewBox="0 0 24 64"
            className="text-blue-500"
          >
            <path
              d="M12,2 V54 M4,48 L12,62 L20,48"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Approach Card */}
        <div className="bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            The Approach
          </h4>
          <ContentList items={content.approach} />
        </div>

        {/* SVG Slot - Vertical */}
        <div className="flex justify-center h-16">
          <svg
            width="24"
            height="64"
            viewBox="0 0 24 64"
            className="text-blue-500"
          >
            <path
              d="M12,2 V54 M4,48 L12,62 L20,48"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Solution Card */}
        <div className="bg-white border border-blue-200 rounded-md p-5 shadow-sm">
          <h4 className="font-bold text-xl mb-3 font-mono text-center">
            Our Solution
          </h4>
          <ContentList items={content.solution} />
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowSection;
