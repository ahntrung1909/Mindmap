import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "blue",
};
function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      <div>
        <input id="text" name="text" onChange={onChange} value="Xin chao" />
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
