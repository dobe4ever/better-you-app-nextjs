// components/layout/floating-button/chat-bot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Paperclip, Mic, ArrowDown } from 'lucide-react';

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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
        setShowScrollButton(!isNearBottom);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const sendMessage = (): void => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input.trim() }]);
      setInput('');
      textareaRef.current?.blur();
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

  const handleFocus = () => {
    setIsFocused(true);
    setTimeout(() => {
      messagesContainerRef.current?.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="h-full flex flex-col">
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-4 pt-16">
        <div className="pb-[120px]">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              {message.sender === 'bot' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full p-2 shadow-md bg-orange-400 mr-2 flex items-center justify-center">
                  <Bot size={20} color="white" />
                </div>
              )}
              <div className={`${
                message.sender === 'user' ? 
                'bg-gray-200 rounded-xl px-4 py-2 max-w-[80%] break-words' : 
                'max-w-[80%] break-words'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-[100px] left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-2 z-50"
        >
          <ArrowDown size={24} className="text-gray-500" />
        </button>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <div className="relative rounded-xl overflow-hidden bg-gray-200">
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
              onFocus={handleFocus}
              onBlur={() => setIsFocused(false)}
              className="w-full px-4 pt-2 pb-10 max-h-[200px] min-h-[80px] focus:outline-none resize-none bg-gray-200 overflow-hidden"
              rows={1}
            />
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <button className="p-2 text-gray-500">
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
              <button className="p-2 text-gray-500">
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