import React from 'react';
import { GraduationCap, BookOpen, Trophy, DollarSign } from 'lucide-react';

interface QuickActionProps {
  onActionClick: (action: string) => void;
}

export const QuickActions: React.FC<QuickActionProps> = ({ onActionClick }) => {
  const actions = [
    { icon: <GraduationCap className="w-5 h-5" />, label: 'Admissions', query: 'Tell me about the admission process' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses', query: 'What courses are available?' },
    { icon: <Trophy className="w-5 h-5" />, label: 'Cutoffs', query: 'What are the previous year cutoffs?' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Fees', query: 'What are the course fees?' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onActionClick(action.query)}
          className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
        >
          <div className="p-2 bg-blue-50 rounded-full mb-2">{action.icon}</div>
          <span className="text-sm font-medium text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );
};