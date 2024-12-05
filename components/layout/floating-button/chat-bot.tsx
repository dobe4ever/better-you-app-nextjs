import React, { useState } from 'react';
import { Bot, Send, Paperclip, Mic, User } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I'm your AI habit coach. How can I assist you today?" },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      setTimeout(() => {
        setMessages(msgs => [...msgs, { sender: 'bot', text: "I've received your message. How else can I help?" }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto text-md">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-end ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`bg-orange-400 text-white rounded-full p-2 shadow-md ${message.sender === 'user' ? 'bg-gray-200 ml-2' : 'bg-orange-400 mr-2'}`}>
                {message.sender === 'user' ? <User size={20} color="white" /> : <Bot size={20} color="white" />}
              </div>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-orange-400 text-white' : 'bg-white'}`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-4 left-4">
        <div className="flex items-center border rounded-full overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
          />
          <div className="absolute bottom- right-0 px- py-">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Paperclip size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Mic size={20} />
            </button>
            <button onClick={sendMessage} className="bg-orange-400 text-white p-2 pr-3 rounded-r-full hover:bg-orange-400">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;