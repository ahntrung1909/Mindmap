"use client";
import { useCallback, useRef, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "blue",
};

function TextUpdaterNode({ data, isConnectable }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState("Value");
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);

  return (
    <div
      className="text-updater-node"
      onDoubleClick={() => {
        console.log("dc");
        inputRef.current.focus();
      }}
    >
      <div>
        <input
          id="text"
          name="text"
          onChange={onChange}
          value={value}
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
