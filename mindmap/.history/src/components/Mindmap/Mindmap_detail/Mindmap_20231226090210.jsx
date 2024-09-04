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
import updateAction from "./updateAction";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
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
  const { screenToFlowPosition, setViewport } = useReactFlow();
  const [mindmapName, setMindmapName] = useState("");
  const [mindmapTitle, setMindmapTitle] = useState("");

  useEffect(() => {
    const restoreFlow = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/mindmap/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.status === 404) {
        console.log("not found");
      }
      const data = await response.json();
      if (data) {
        console.log(data);
        setMindmapName(data.name);
        setMindmapTitle(data.title);
        const flow = data.data[0];
        if (flow) {
          const { x = 0, y = 0, zoom = 1 } = flow.viewport;
          id = flow.nodes.length;
          setNodes(flow.nodes || []);
          setEdges(flow.edges || []);
          setViewport({ x, y, zoom });
        } else {
          setNodes([
            {
              id: "0",
              type: "input",
              data: { label: "My mindmap" },
              position: { x: 0, y: 50 },
              type: "textUpdaterNode",
            },
          ]);
        }
      }
    };
    restoreFlow();
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
  const handleChangeMindmapName = (e) => {
    setMindmapName(e.target.value);
  };
  const handleChangeMindmapTitle = (e) => {
    setMindmapTitle(e.target.value);
  };

  const onSave = useCallback(async () => {
    console.log("mindmap name", mindmapName);
    console.log("mindmap title", mindmapTitle);

    if (rfInstance) {
      const flow = await rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
      const flag = await updateAction(
        params.id,
        flow,
        mindmapName,
        mindmapTitle
      );
      if (flag) {
        toast.success("Lưu thành công", {
          autoClose: 2000,
        });
      }
    }
  }, [rfInstance, mindmapName, mindmapTitle]);

  return (
    <div>
      <div className="1250px mx-auto px-[25px] flex justify-between">
        <div className="flex flex-col mb-[10px]">
          <input
            type="text"
            value={mindmapName}
            className="text-4xl "
            onChange={handleChangeMindmapName}
          />
          <input
            type="text"
            value={mindmapTitle}
            onChange={handleChangeMindmapTitle}
          />
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
