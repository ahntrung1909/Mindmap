"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";

function TextUpdaterNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <div>
        <input value={data.label} className="nodrag node-name"></input>
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
