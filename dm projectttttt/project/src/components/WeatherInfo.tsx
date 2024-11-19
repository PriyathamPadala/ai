import React from 'react';
import { Cloud, Snowflake, Wind } from 'lucide-react';

export const WeatherInfo: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Weather Conditions</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Snowflake className="w-5 h-5 text-blue-400" />
            <span>Temperature</span>
          </div>
          <p className="text-2xl font-bold">-5°C</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Wind className="w-5 h-5 text-gray-400" />
            <span>Wind Speed</span>
          </div>
          <p className="text-2xl font-bold">25 km/h</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg col-span-2">
          <div className="flex items-center space-x-2 mb-2">
            <Cloud className="w-5 h-5 text-gray-400" />
            <span>Visibility</span>
          </div>
          <p className="text-2xl font-bold">800m</p>
        </div>
      </div>
    </div>
  );
};