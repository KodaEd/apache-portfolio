import React from 'react';

const WeatherDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">React Weather Dashboard</h2>
        <div className="space-y-2">
          <p>A modern weather application built with React and Next.js</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">React</span>
            <span className="px-2 py-1 bg-black text-white rounded text-sm">Next.js</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">TailwindCSS</span>
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
          View the live demo at: <a href="#" className="text-blue-600 hover:underline">demo.weather-app.com</a>
        </p>
      </div>
    </div>
  );
};

export default WeatherDashboard;