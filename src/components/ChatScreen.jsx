import { useState, useRef, useEffect } from "react";
import MessageBubble from "./AI/MessageBubble";
import ChatInput from "./AI/ChatInput";


export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I'm Abhishek's AI assistant. Ask me anything about his experience, projects, or skills.",
    },
  ]);

  const bottomRef = useRef(null);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "This is a demo AI response." },
      ]);
    }, 800);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div id="chat" className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col">
        <h2 className="text-4xl font-bold text-[var(--neon)] text-center mb-8">AI Assistant</h2>
        
        <div className="flex-1 overflow-y-auto bg-gray-900/30 rounded-lg p-4 mb-4 backdrop-blur-sm border border-gray-800">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}