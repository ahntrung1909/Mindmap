import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";

export default function page() {
  return (
    <div>
      <div className="1250px mx-auto px-[25px] flex justify-between">
        <div className="flex flex-col mb-[10px]">
          <input type="text" value="Mindmap không tên" className="text-4xl " />
          <input type="text" value="Không có title" />
        </div>
        <div>
          <button className="p-[14px] bg-blue-400">Lưu mindmap</button>
          <button>Chia sẻ</button>
        </div>
      </div>
      <Mindmap />
    </div>
  );
}
