import React, { useState, useRef, useEffect } from 'react';
import { Send, GraduationCap } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { QuickActions } from './components/QuickActions';
import { Message, QuickAction } from './types';

const quickActions: QuickAction[] = [
  { id: '1', label: '📚 Admission Process', query: 'Tell me about the admission process' },
  { id: '2', label: '💰 Fee Structure', query: 'What is the fee structure?' },
  { id: '3', label: '🏆 Scholarships', query: 'Available scholarships' },
  { id: '4', label: '🏢 College List', query: 'List of colleges' },
  { id: '5', label: '📋 Eligibility Criteria', query: 'What are the eligibility criteria?' },
];

const welcomeMessage: Message = {
  id: 'welcome',
  type: 'bot',
  content: "👋 Welcome to the Department of Technical Education, Rajasthan's AI Assistant! I'm here to help you with information about engineering and polytechnic institutes. How can I assist you today?",
  timestamp: new Date(),
};

function App() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (query: string = input) => {
    if (!query.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `I understand you're asking about "${query}". This is a demo response - in production, this would be connected to an AI backend to provide accurate information about colleges, admissions, and more.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">DTE Rajasthan Assistant</h1>
            <p className="text-sm text-gray-500">24/7 Support for Technical Education Queries</p>
          </div>
        </div>
      </header>

      {/* Main Chat Container */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Messages Area */}
          <div className="h-[600px] overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-100 p-4 bg-gray-50">
            <QuickActions actions={quickActions} onActionClick={handleSend} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSend()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Send size={20} />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;