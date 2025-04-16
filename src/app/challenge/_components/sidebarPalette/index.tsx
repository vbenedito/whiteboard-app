"use client";

import DraggableCard from "../draggable-card";
import InputCard from "../inputCard";

const elements = [
  { label: "User", type: "USER" },
  { label: "Database", type: "DB" },
  { label: "Load Balancer", type: "LB" },
  { label: "Cache", type: "CH" },
  { label: "API Server", type: "AS" },
];

export default function SidebarPalette() {
  const onDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-60 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="font-bold text-lg mb-4">Componentes</h2>
      {elements.map((el) => (
        <DraggableCard
          key={el.type}
          label={el.label}
          onDragStart={(event) => onDragStart(event, el.label)}
        />
      ))}

      <InputCard onDragStart={onDragStart} />
    </div>
  );
}
