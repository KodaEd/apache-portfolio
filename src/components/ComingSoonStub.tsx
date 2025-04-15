// src/components/ComingSoonStub.tsx
import React from "react";

const ComingSoonStub: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-3">Coming Soon</h2>
      <p className="text-gray-600">
        Work experience details will be added here. This section is currently
        under construction.
      </p>
      <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded">
        <p>
          <strong>Note:</strong> Check back soon for updated information about
          previous work experience and accomplishments.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonStub;
