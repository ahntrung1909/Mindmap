"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "blue",
};

function TextUpdaterNode({ data, isConnectable }) {
  return (
    <div
      className="text-updater-node"
     }
    >
      <div>
        <input
          onChange={onChange}
          value={data.label}
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
