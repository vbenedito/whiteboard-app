import { Message } from "@/app/challenge/_components/ia-chat/types";
import { useState } from "react";

const useAIChat = () => {
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

  return {
    messages,
    input,
    setInput,
    handleSend,
  };
};

export default useAIChat;
