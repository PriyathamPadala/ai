import React from 'react';
import { QuickAction } from '../types';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionClick: (query: string) => void;
}

export function QuickActions({ actions, onActionClick }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => onActionClick(action.query)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors duration-200"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}