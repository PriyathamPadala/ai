import React from 'react';
import { Sprout, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CropGuard AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
            <User className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
}