import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = {
  width: "100px",
  height: "100px",
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
      />
      <div>
        <input id="text" name="text" onChange={onChange} value="Xin chao" />
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
