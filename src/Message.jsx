import React from 'react';
import { UserIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Message({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-3`}>
      <div className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500' : 'bg-purple-500'}`}>
          {isUser ? (
            <UserIcon className="w-5 h-5 text-white" />
          ) : (
            <AcademicCapIcon className="w-5 h-5 text-white" />
          )}
        </div>
        
        <div className={`max-w-prose p-3 rounded-lg ${
          isUser ? 'bg-blue-100' : 'bg-purple-100'
        }`}>
          <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
          {message.recommendations && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Recommended topics:</p>
              <ul className="list-disc pl-4 space-y-1">
                {message.recommendations.map((rec, i) => (
                  <li key={i} className="text-sm text-gray-600">{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}