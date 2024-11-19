import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message }) => {
  return (
    <div className={`flex items-start gap-4 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      <div className={`p-2 rounded-full ${isBot ? 'bg-blue-100' : 'bg-purple-100'}`}>
        {isBot ? <Bot className="w-5 h-5 text-blue-600" /> : <User className="w-5 h-5 text-purple-600" />}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium mb-1">{isBot ? 'College Assistant' : 'You'}</p>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};