// // components/layout/floating-chat-btn.tsx
// 'use client'

// import { useState } from 'react'
// import { Bot, X } from 'lucide-react'

// interface FloatingChatBtnProps {
//   // You can add props here if needed
// }

// export function FloatingChatBtn({}: FloatingChatBtnProps) {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = (): void => {
//     setIsChatOpen(!isChatOpen);
//   };

//   return (
//     <>
//       <button
//         onClick={toggleChat}
//         className="z-50 fixed bottom-4 right-4 border-2 border-white bg-orange-400 text-white rounded-full p-3 shadow-md"
//       >
//         <Bot size={32} />
//       </button>

//       {isChatOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen">
//           <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white text-orange-400">
//             <h2 className="text-xl text-black font-bold">AI Coach</h2>
//             <button onClick={toggleChat}>
//               <X size={24} />
//             </button>
//           </div>
//           <div className="flex-1 overflow-hidden">
//             {/* <Chatbot /> */}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// components/layout/floating-chat-btn.tsx
'use client'

import { useState } from 'react'
import { Bot, X } from 'lucide-react'

interface FloatingChatBtnProps {
  onClick: () => void;
}

export function FloatingChatBtn({ onClick }: FloatingChatBtnProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = (): void => {
    setIsChatOpen(!isChatOpen);
    onClick(); // Call the passed onClick function
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
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen">
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white text-orange-400">
            <h2 className="text-xl text-black font-bold">AI Coach</h2>
            <button onClick={toggleChat}>
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            {/* <Chatbot /> */}
          </div>
        </div>
      )}
    </>
  )
}
