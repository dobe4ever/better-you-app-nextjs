// components/layout/floating-button/chat-bot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Paperclip, Mic, User } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm your AI habit coach. How can I assist you today?" },
  ]);
  const [input, setInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`; // Max height of 200px
    }
  }, [input]);

  const sendMessage = (): void => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input.trim() }]);
      setInput('');
      setTimeout(() => {
        setMessages(msgs => [...msgs, { 
          sender: 'bot', 
          text: "I've received your message. How else can I help?" 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed top-16 right-0 left-0 bottom-0 bg-white z-50 flex flex-col">
      <div className="flex-1 overflow-y-auto px-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div className={`flex items-end max-w-[80%] ${
              message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <div className={`flex-shrink-0 rounded-full p-2 shadow-md ${
                message.sender === 'user' ? 'bg-gray-200 ml-2' : 'bg-orange-400 mr-2'
              }`}>
                {message.sender === 'user' ? 
                  <User size={20} color="white" /> : 
                  <Bot size={20} color="white" />
                }
              </div>
              <div className={`px-4 py-2 rounded-lg break-words ${
                message.sender === 'user' ? 
                'bg-orange-400 text-white' : 
                'bg-gray-100'
              }`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4">
        <div className="relative border rounded-xl overflow-hidden bg-gray-200">
          <div className="relative">
            {!isFocused && !input && (
              <span className="absolute left-4 top-2 text-gray-400 text-sm pointer-events-none">
                Type your message...
              </span>
            )}
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full px-4 pt-2 pb-10 max-h-[200px] min-h-[80px] focus:outline-none resize-none bg-gray-200 overflow-hidden"
              rows={1}
            />
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Paperclip size={20} />
            </button>
            {input.trim() ? (
              <button 
                onClick={sendMessage} 
                className="bg-orange-400 text-white p-2 rounded-full"
              >
                <Send size={20} />
              </button>
            ) : (
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Mic size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;