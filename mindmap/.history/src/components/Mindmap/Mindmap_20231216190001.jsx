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
  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

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
