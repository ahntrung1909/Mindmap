"use client";
import React, { useCallback, useEffect, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  MiniMap,
  Controls,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import "./index.css";
import TextUpdaterNode from "./TextUpdater";
const nodeTypes = {
  textUpdaterNode: TextUpdaterNode,
};

const initialNodes = [];

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
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
          type: "textUpdaterNode",
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );
  useEffect(() => {
    const onChange = (e, id) => {
      setNodes((nds) => {
        nds.map((node) => {
          if (node.id !== id) {
            return node;
          }
          const label = e.target.value;
          return {
            ...node,
            data: {
              ...node.data,
              label,
            },
          };
        });
      });
    };
    setNodes([
      {
        id: "0",
        type: "input",
        data: { label: "Node" },
        position: { x: 0, y: 50 },
        type: "textUpdaterNode",
        onChange: onChange,
      },
    ]);
  }, []);
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
      />
      <Background variant="dots" gap={12} size={1} />
      <Controls />
      <MiniMap />
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
