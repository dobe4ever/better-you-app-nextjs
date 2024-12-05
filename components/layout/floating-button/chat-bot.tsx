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
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-end ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-orange-main ml-2' : 'bg-gray-300 mr-2'}`}>
                {message.sender === 'user' ? <User size={20} color="white" /> : <Bot size={20} color="white" />}
              </div>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-orange-main text-white' : 'bg-white'}`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Mic size={20} />
          </button>
          <button onClick={sendMessage} className="bg-orange-main text-white p-2 hover:bg-orange-main">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;