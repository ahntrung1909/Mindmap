"use client";
import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";
// import TextUpdaterNode from "./TextUpdater";
// import "./text-updater-node.css";

const initialNodes = [
  {
    id: "0",
    position: { x: 250, y: 250 },
    data: { label: "Test" },
  },
];
// const nodeTypes = { textUpdater: TextUpdaterNode };

const initialEdges = [];
let id = 1;
const getId = () => `${id++}`;

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  return (
    <ReactFlowProvider>
      <div className="w-full h-[600px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView="true"
          // nodeTypes={nodeTypes}
          onNodeDoubleClick={(e, node) => {
            node.type = "textUpdater";
            console.log("update");
          }}
        >
          <Controls />
          <MiniMap nodeColor="blue" />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
