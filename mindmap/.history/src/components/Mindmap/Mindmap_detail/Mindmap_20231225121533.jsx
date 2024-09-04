"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
const flowKey = "example-flow";

const initialNodes = [];

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = ({ params }) => {
  const [rfInstance, setRfInstance] = useState(null);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  const onChange = (nodeName, id) => {
    setNodes((nds) => {
      return nds?.map((node) => {
        if (node.id !== id) {
          return node;
        }
        return {
          ...node,
          data: {
            ...node.data,
            label: nodeName,
          },
        };
      });
    });
  };
  useEffect(() => {
    console.log("sluvg", params.slug);
    setNodes([
      {
        id: "0",
        type: "input",
        data: { label: "My mindmap", onChange: onChange },
        position: { x: 0, y: 50 },
        type: "textUpdaterNode",
      },
    ]);
  }, []);

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
          data: { label: `Node ${id}`, onChange: onChange },
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

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  return (
    <div>
      <div className="1250px mx-auto px-[25px] flex justify-between">
        <div className="flex flex-col mb-[10px]">
          <input type="text" value="Mindmap không tên" className="text-4xl " />
          <input type="text" value="Không có title" />
        </div>
        <div className="font-bold text-white flex gap-x-[10px] h-fit">
          <button
            className="p-[12px] bg-blue-400 rounded-[10px] hover:bg-blue-600"
            onClick={onSave}
          >
            Lưu mindmap
          </button>
          <button className="p-[14px] bg-blue-400 rounded-[10px] hover:bg-blue-600">
            Chia sẻ
          </button>
        </div>
      </div>
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
          onInit={setRfInstance}
        />
        <Background variant="dots" gap={12} size={1} />
        <Controls />
        <MiniMap />
      </div>
    </div>
  );
};

export default ({ params }) => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop params={params} />
  </ReactFlowProvider>
);
