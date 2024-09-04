"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useNodeId } from "reactflow";
import "./text-updater-node.css";

function TextUpdaterNode({ data, isConnectable }) {
  const nodeId = useNodeId();
  const [nodeName, setNodeName] = useState(data.label);
  const [isReadOnly, setReadOnly] = useState(true);
  useEffect(() => {
    console.log(data);
    console.log(nodeId);
  }, []);
  const handleChange = (e) => {
    setNodeName(e.target.value);
  };
  return (
    <div className="text-updater-node">
      {nodeId !== "0" ? (
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
          value={nodeName}
          className={isReadOnly ? "node-name" : "nodrag node-name focus"}
          //   className="nodrag node-name"
          onDoubleClick={() => {
            setReadOnly(false);
          }}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              data.onChange(nodeName, nodeId);
              setReadOnly(true);
            }
          }}
          onBlur={() => {
            setReadOnly(true);
          }}
          readOnly={isReadOnly}
        />
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
