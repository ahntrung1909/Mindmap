"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useNodeId } from "reactflow";
import "./text-updater-node.css";
import ContentEditable from "react-contenteditable";

function TextUpdaterNode({ data, isConnectable }) {
  const nodeId = useNodeId();
  const [nodeName, setNodeName] = useState(data.label);
  const [isDisable, setIsDisable] = useState(false);
  useEffect(() => {
    console.log(data);
    console.log(nodeId);
  }, []);
  const handleChange = (e) => {
    setNodeName(e.target.value);
  };
  return (
    <div
      className={isDisable ? "text-updater-node" : "text-updater-node focus"}
      onDoubleClick={() => {
        setIsDisable(false);
      }}
    >
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
        <ContentEditable
          className={isDisable ? "node-name" : "nodrag node-name focus"}
          //   className="nodrag node-name"

          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              data.onChange(nodeName, nodeId);
              setIsDisable(true);
            }
          }}
          onBlur={() => {
            console.log(blur);
            setIsDisable(true);
          }}
          disabled={isDisable}
          html={nodeName}
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
