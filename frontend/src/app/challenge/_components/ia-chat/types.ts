export type Message = {
  id: string;
  text: string;
  type: "user" | "interviewer";
};

export interface ChatPanelProps {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
}
