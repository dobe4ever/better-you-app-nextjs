// components/layout/floating-button/floating-chat-button.tsx
import React, { useState } from 'react';
import Chatbot from './chat-bot';
import { Bot, X } from 'lucide-react';

interface FloatButtonProps {}

const FloatButton: React.FC<FloatButtonProps> = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const toggleChat = (): void => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="z-50 fixed bottom-4 right-4 border-2 border-white bg-orange-main text-white rounded-full p-3 shadow-md"
      >
        <Bot size={32} />
      </button>

      {isChatOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen">
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white text-orange-main">
            <h2 className="text-xl text-black font-bold">AI Coach</h2>
            <button onClick={toggleChat}>
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatButton;