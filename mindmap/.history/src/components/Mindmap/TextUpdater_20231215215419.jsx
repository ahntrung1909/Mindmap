"use client";
import { useCallback, useRef } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "blue",
};

function TextUpdaterNode({ data, isConnectable }) {
  const inputRef = useRef(null);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      className="text-updater-node"
      onDoubleClick={() => {
        console.log("dc");
        inputRef.current.focus;
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      <div>
        <input
          id="text"
          name="text"
          onChange={onChange}
          value="Xin chao"
          className="nodrag"
          ref={inputRef}
        />
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
