import Mindmap from "@/components/Mindmap/Mindmap";

export default function page() {
  return (
    <div>
      <div className="1250px mx-auto px-[25px] flex flex-col">
        <input type="text" value="Mindmap không tên" className="text-4xl " />
        <input type="text" value="Title không tên" />
      </div>
      <Mindmap />
    </div>
  );
}
