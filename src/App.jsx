import React from 'react';
import { useStore } from './store';
import Message from './Message';
import ChatInput from './ChatInput';

export default function App() {
  const { messages, isLoading } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">AI Learning Tutor</h1>
          <p className="text-gray-600">Get personalized explanations and learning recommendations</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 h-full">
        <div className="bg-white rounded-lg shadow-lg p-4 h-[calc(100vh-200px)] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                <span>Analyzing your question...</span>
              </div>
            )}
          </div>
          
          <ChatInput />
        </div>
      </main>
    </div>
  );
}