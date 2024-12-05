// import { Bot } from 'lucide-react'
// import { Button } from '../../ui/button'

// export function FloatingChatButton({ className = '' }) {
//   return (
//     <Button
//       className={`fixed bottom-4 right-4 rounded-full p-3 bg-orange-500 ${className}`}
//       onClick={() => console.log('Open chat')}
//     >
//       <Bot className="h-6 w-6 text-white" />
//     </Button>
//   )
// }



import React, { useState } from 'react';
import Chatbot from './chat-bot';
import { Bot, X } from 'lucide-react';

const FloatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="z-50 fixed bottom-4 right-4 border-2 border-white bg-orange-400 text-white rounded-full p-3 shadow-md hover:bg-orange-main transition-colors duration-300"
        aria-label="Open chat"
      >
        {/* <Bot size={24} /> */}
        <Bot size={40} />
      </button>

      {/* Full-screen Chat Interface */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg- text-orange-400">
            <h2 className="text-xl text-black font-bold">AI Coach</h2>
            <button onClick={toggleChat}>
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow p-4">
            {/* Add your chat interface components here */}
            < Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatButton;