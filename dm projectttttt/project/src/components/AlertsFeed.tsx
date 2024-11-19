import React from 'react';
import { AlertCircle, Camera, Radio, Thermometer } from 'lucide-react';

export const AlertsFeed: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'camera',
      message: 'Movement detected in Sector 7',
      time: '2 min ago',
      severity: 'high',
      icon: Camera
    },
    {
      id: 2,
      type: 'sensor',
      message: 'Temperature anomaly at Post 23',
      time: '5 min ago',
      severity: 'medium',
      icon: Thermometer
    },
    {
      id: 3,
      type: 'radio',
      message: 'Communication disruption in Zone B',
      time: '10 min ago',
      severity: 'low',
      icon: Radio
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Live Alerts</h2>
        <AlertCircle className="w-5 h-5 text-red-400" />
      </div>
      <div className="space-y-4 overflow-y-auto h-[calc(100%-3rem)]">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg ${
              alert.severity === 'high'
                ? 'bg-red-900/50'
                : alert.severity === 'medium'
                ? 'bg-yellow-900/50'
                : 'bg-blue-900/50'
            }`}
          >
            <div className="flex items-start space-x-3">
              <alert.icon className="w-5 h-5 mt-1" />
              <div className="flex-1">
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-gray-400">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};