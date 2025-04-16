import { DraggableCardProps } from "./types";

const DraggableCard = ({ label, onDragStart }: DraggableCardProps) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, label)}
      className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-grab"
    >
      {label}
    </div>
  );
};

export default DraggableCard;
