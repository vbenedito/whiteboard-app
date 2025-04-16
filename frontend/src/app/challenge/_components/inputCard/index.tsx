import { useState } from "react";
import "reactflow/dist/style.css";

type InputCardProps = {
  onDragStart: (e: React.DragEvent, type: string) => void;
};

const InputCard = ({ onDragStart }: InputCardProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div
        className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-grab"
        draggable
        onDragStart={(e) => {
          setInputValue("");
          onDragStart(e, inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Custom Component"
          className=" w-full p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-grab"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputCard;
