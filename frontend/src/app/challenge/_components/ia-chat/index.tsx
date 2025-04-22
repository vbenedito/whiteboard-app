"use client";

import { CameraIcon, Send } from "lucide-react";
import { ChatPanelProps } from "./types";

export default function ChatPanel({
  messages,
  handleSend,
  input,
  setInput,
}: ChatPanelProps) {
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-auto text-white">
        <div className="flex-1 p-4 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={` px-4 py-2 rounded-xl w-fit max-w-[80%] break-words ${
                msg.type === "user" ? "ml-auto bg-blue-600" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 p-2 flex items-center gap-2 bg-gray-900">
        <button
          type="button"
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
        >
          <CameraIcon size={20} />
        </button>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua pergunta..."
          className="flex-1 min-h-[50px] max-h-[100px] resize-none border-2 border-gray-700 bg-gray-800 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors duration-200"
        />

        <button
          data-testid="send-button"
          type="button"
          onClick={handleSend}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
        >
          <Send size={20} />
        </button>
      </div>
    </>
  );
}
