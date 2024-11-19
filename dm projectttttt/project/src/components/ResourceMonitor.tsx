import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

export const ResourceMonitor: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Resource Status</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <Battery className="w-5 h-5 text-green-400" />
            <span>Drone Battery</span>
          </div>
          <span className="text-green-400">85%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <Signal className="w-5 h-5 text-yellow-400" />
            <span>Signal Strength</span>
          </div>
          <span className="text-yellow-400">72%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <Wifi className="w-5 h-5 text-blue-400" />
            <span>Network Status</span>
          </div>
          <span className="text-blue-400">Active</span>
        </div>
      </div>
    </div>
  );
};