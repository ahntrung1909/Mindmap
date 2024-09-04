"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useNodeId } from "reactflow";
import "./text-updater-node.css";

function TextUpdaterNode({ data, isConnectable }) {
  const nodeId = useNodeId();
  useEffect(() => {
    console.log(data);
    console.log(nodeId);
  }, []);
  return (
    <div className="text-updater-node">
      {nodeId === "0" ? (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
      ) : (
        ""
      )}

      <div>
        <input
          value={data.label}
          className="nodrag node-name"
          onFocus={() => {
            console.log(nodeId);
          }}
        ></input>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
