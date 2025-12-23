
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Amkay Engineering. I am your technical consultant. How can I assist you with your Royal Enfield build today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const response = await getAssistantResponse(messages, userMessage);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="bg-neutral-900 rounded-2xl border border-neutral-800 h-[600px] flex flex-col shadow-2xl overflow-hidden">
      <div className="bg-neutral-800 p-4 flex items-center justify-between border-b border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-bold text-sm tracking-widest uppercase">Amkay Technical Consultant</span>
        </div>
        <i className="fa-solid fa-microchip text-neutral-500"></i>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-red-600 text-white rounded-tr-none' 
                : 'bg-neutral-800 text-neutral-300 rounded-tl-none border border-neutral-700'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-neutral-800 p-4 rounded-2xl rounded-tl-none border border-neutral-700 flex gap-1">
              <div className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-neutral-800/50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about specific parts or manufacturing processes..."
            className="w-full bg-neutral-900 border border-neutral-700 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-red-600 transition-all pr-14"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-2 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
          >
            <i className="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </div>
        <p className="text-[10px] text-neutral-500 mt-2 text-center uppercase tracking-widest">Powered by Gemini-3 Engine</p>
      </div>
    </div>
  );
};

export default AIAssistant;
