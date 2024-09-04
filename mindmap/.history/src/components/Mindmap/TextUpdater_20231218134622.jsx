"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useNodeId } from "reactflow";
import "./text-updater-node.css";
import ContentEditable from "react-contenteditable";

function TextUpdaterNode({ data, isConnectable }) {
  const nodeId = useNodeId();
  const [nodeName, setNodeName] = useState(data.label);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    console.log(data);
    console.log(nodeId);
  }, []);
  const handleChange = (e) => {
    setNodeName(e.target.value);
  };
  return (
    <div
      className={!isEdit ? "text-updater-node" : "text-updater-node focus"}
      onDoubleClick={() => {
        setIsEdit(true);
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
        <div
          contentEditable={isEdit}
          className={!isEdit ? "node-name" : "nodrag node-name focus"}
          //   className="nodrag node-name"

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
        >
          {nodeName}
        </div>
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
