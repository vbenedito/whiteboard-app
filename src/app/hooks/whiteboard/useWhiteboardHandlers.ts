/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { addEdge, Connection, Node } from "reactflow";

let id = 0;
const getId = () => `node_${id++}`;

interface HandlersProps {
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  setEdges: React.Dispatch<React.SetStateAction<any[]>>;
}

export function useWhiteboardHandlers({ setNodes, setEdges }: HandlersProps) {
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = { x: event.clientX - 300, y: event.clientY - 50 };
      const newNode: Node = {
        id: getId(),
        type: "default",
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return { onConnect, onDrop, onDragOver };
}
