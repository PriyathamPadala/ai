import React from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';

export const ThreatMap: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Threat Detection Map</h2>
        <div className="flex items-center space-x-2 text-sm">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Secure
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Warning
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Alert
          </span>
        </div>
      </div>
      <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1200&q=80" 
          alt="Satellite Map"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3">
            <MapPin className="w-6 h-6 text-green-500" />
          </div>
          <div className="absolute top-1/2 right-1/4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};