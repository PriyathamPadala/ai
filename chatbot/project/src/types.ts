export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface QuickAction {
  id: string;
  label: string;
  query: string;
}