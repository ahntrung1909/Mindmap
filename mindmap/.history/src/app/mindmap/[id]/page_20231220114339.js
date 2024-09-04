import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";

export default function page() {
  return (
    <div>
      <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
        <input type="text" value="Mindmap không tên" className="text-4xl " />
        <input type="text" value="Không có title" />
      </div>
      <Mindmap />
    </div>
  );
}
