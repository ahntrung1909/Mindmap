"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "blue",
};

function TextUpdaterNode({ data, isConnectable }) {
  const inputRef = useRef(null);
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);
  useEffect(() => {
    console.log("data", data);
  });
  return (
    <div
      className="text-updater-node"
      onDoubleClick={() => {
        inputRef.current.focus();
      }}
    >
      <div>
        <input
          onChange={onChange}
          value={value}
          className="nodrag node-name"
          ref={inputRef}
        ></input>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={handleStyle}
      />
    </div>
  );
}

export default TextUpdaterNode;
