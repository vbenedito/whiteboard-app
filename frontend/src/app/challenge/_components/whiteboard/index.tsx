"use client";
import "reactflow/dist/style.css";

import ReactFlow, { Background, Controls } from "reactflow";
import SidebarPalette from "../sidebarPalette";
import { useWhiteboardState } from "@/app/hooks/whiteboard/useWhiteboardState";
import { useWhiteboardHandlers } from "@/app/hooks/whiteboard/useWhiteboardHandlers";
import { ReactFlowProvider } from "@xyflow/react";

export default function Whiteboard() {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useWhiteboardState();

  const { onConnect, onDrop, onDragOver } = useWhiteboardHandlers({
    setNodes,
    setEdges,
  });

  return (
    <ReactFlowProvider>
      <div className="w-full h-full flex">
        <SidebarPalette />

        <div
          className="flex-1 h-screen"
          id="challenge-page"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            data-testid="react-flow"
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
}
