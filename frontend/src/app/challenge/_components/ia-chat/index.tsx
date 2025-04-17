"use client";

import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

type Message = {
  id: string;
  text: string;
  type: "user" | "interviewer";
};

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-xl ${
              msg.type === "user" ? "ml-auto bg-blue-600" : "bg-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t flex gap-2 items-center">
        <button
          type="button"
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
        >
          <Paperclip size={20} />
        </button>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua pergunta..."
          className="flex-1 min-h-[50px] max-h-[100px] resize-none border-2 border-gray-700 bg-gray-800 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors duration-200"
        />

        <button
          type="button"
          onClick={handleSend}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
