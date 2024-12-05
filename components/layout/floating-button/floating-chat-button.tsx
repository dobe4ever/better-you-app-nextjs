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
        className="z-50 fixed bottom-4 right-4 border-2 border-white bg-orange-400 text-white rounded-full p-3 shadow-md"
      >
        <Bot size={32} />
      </button>

      {isChatOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 text-orange-400">
            <h2 className="text-xl text-black font-bold">AI Coach</h2>
            <button onClick={toggleChat}>
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 p-4">
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatButton;