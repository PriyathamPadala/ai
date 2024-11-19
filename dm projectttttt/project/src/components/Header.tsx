import React from 'react';
import { Shield, Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">ITBP Security Dashboard</h1>
              <p className="text-sm text-gray-400">Indo-Tibetan Border Police Force</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-700">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
              <User className="w-6 h-6" />
              <span className="hidden md:inline">Commander</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};