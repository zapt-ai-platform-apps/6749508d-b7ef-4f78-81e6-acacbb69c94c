import React, { useState } from 'react';
import { useStore } from './store';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import api from './api';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const { addMessage, setLoading } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || useStore.getState().isLoading) return;

    // Add user message
    addMessage({ role: 'user', content: input.trim() });
    setInput('');
    
    try {
      setLoading(true);
      const response = await api.submitQuestion(input.trim());
      
      // Add tutor response
      addMessage({
        role: 'assistant',
        content: response.answer,
        recommendations: response.recommendations
      });
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 pt-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question or share a concept you're struggling with..."
          className="flex-1 box-border border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={useStore.getState().isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}