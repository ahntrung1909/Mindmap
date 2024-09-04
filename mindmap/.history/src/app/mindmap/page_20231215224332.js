import Mindmap from "@/components/Mindmap/Mindmap";
import { ReactFlowProvider } from "reactflow";

export default function page() {
  return (
    <div>
      <div className="1250px mx-auto px-[25px]">
        <div>Mindmap không tên</div>
      </div>
      <ReactFlowProvider>
        <Mindmap />
      </ReactFlowProvider>
    </div>
  );
}
