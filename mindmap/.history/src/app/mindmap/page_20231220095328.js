import Mindmap from "@/components/Mindmap/Mindmap";

export default function page() {
  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button className="w-fit p-[20px] bg-blue-200">Thêm mới</button>
      <div className="grid grid-cols-3">
        <h2>Tên</h2>
        <h2>Tạo lúc</h2>
        <h2>Hành động</h2>
      </div>
    </div>
    // <div>
    //   <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
    //     <input type="text" value="Mindmap không tên" className="text-4xl " />
    //     <input type="text" value="Không có title" />
    //   </div>
    //   <Mindmap />
    // </div>
  );
}
