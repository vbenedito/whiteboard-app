"use client";

const elements = [
  { label: "Database", type: "DB" },
  { label: "Load Balancer", type: "LB" },
  { label: "Cache", type: "Cache" },
  { label: "API Server", type: "API" },
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
        <div
          key={el.type}
          draggable
          onDragStart={(e) => onDragStart(e, el.label)}
          className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-grab"
        >
          {el.label}
        </div>
      ))}
    </div>
  );
}
