import { Message } from "@/app/challenge/_components/ia-chat/types";
import { sendMessageToApi } from "@/app/usecases/ai-chat/api/sendMessage";
import html2canvas from "html2canvas";
import { useState } from "react";

const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const element = document.getElementById("challenge-page");

    let imageBlob: Blob | undefined;

    if (element) {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        useCORS: true,
      });

      imageBlob =
        (await new Promise<Blob | null>((resolve) =>
          canvas.toBlob((blob) => resolve(blob), "image/png")
        )) || undefined;
    }

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await sendMessageToApi({
        message: input,
        challengeName: "upload de video youtube",
        image: imageBlob,
      });

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        text: response as unknown as string,
        type: "interviewer",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Erro ao enviar pergunta:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    input,
    setInput,
    handleSend,
  };
};

export default useAIChat;
