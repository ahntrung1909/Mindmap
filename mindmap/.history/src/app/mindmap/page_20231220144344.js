import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";
import MindmapItem from "@/components/Mindmap/MindmapItem";

export default async function page() {
  const res = await fetch(`http://localhost:8080/api/v1/mindmap`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    next: { tags: ["mindmaps"] },
  });
  let data;
  if (res.status === 200) {
    data = await res.json();
    console.log(typeof data);
  }
  const handleAddNew = () => {
    console.log("onclick");
  };
  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={handleAddNew()}
      >
        Thêm mới
      </button>
      <div className="grid grid-cols-5 font-bold text-[16px] p-[10px]">
        <p>Stt</p>
        <p className="col-span-2">Tên</p>
        <p>Tạo lúc</p>
        <p>Hành động</p>
      </div>
      {Array.from(data)?.map((item, index) => {
        return <MindmapItem key={item._id} data={item} index={++index} />;
      })}
    </div>
  );
}
