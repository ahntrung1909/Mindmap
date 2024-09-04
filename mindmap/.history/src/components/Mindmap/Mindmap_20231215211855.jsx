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
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

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
        fitView="true"
        onNodeDoubleClick={(e, node) => {
          e.preventDefault();
          node["type"] = "textUpdater";
        }}
      >
        <Controls />
        <MiniMap nodeColor="blue" />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
