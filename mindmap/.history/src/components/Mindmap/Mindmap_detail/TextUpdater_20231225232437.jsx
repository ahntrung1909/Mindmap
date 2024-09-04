"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useNodeId } from "reactflow";
import "./text-updater-node.css";
import ContentEditable from "react-contenteditable";

function TextUpdaterNode({ data, isConnectable }) {
  const nodeId = useNodeId();
  const editableRef = useRef(null);
  const [nodeName, setNodeName] = useState(data.label);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    console.log(nodeName);
  });
  const handleChange = (e) => {
    setNodeName(e.target.value);
    data.label = e.target.value;
  };

  return (
    <div
      className={isDisable ? "text-updater-node" : "text-updater-node focus"}
      onDoubleClick={() => {
        setIsDisable(false);
        console.log(editableRef.current);
        setTimeout(() => {
          editableRef.current.focus();
        }, 0);
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
            console.log(e.key);
            if (e.key === "Enter") {
              setIsDisable(true);
            }
          }}
          onBlur={() => {
            setIsDisable(true);
          }}
          disabled={isDisable}
          html={nodeName}
          innerRef={editableRef}
        />
        {/* <input
          type="text"
          value={nodeName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              data.label = nodeName;
              setIsDisable(true);
            }
          }}
          onBlur={() => {
            data.label = nodeName;
            setIsDisable(true);
          }}
          onChange={handleChange}
        /> */}
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
