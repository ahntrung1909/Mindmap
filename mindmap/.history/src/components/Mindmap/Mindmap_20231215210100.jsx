"use client";
import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "0",
    position: { x: 250, y: 250 },
    data: { label: "My mindmap" },
    style: { backgroundColor: "#6ede87", color: "white" },
    type: "add",
  },
];
let id = 1;
const getId = () => `${id++}`;

const initialEdges = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap nodeColor="blue" />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
