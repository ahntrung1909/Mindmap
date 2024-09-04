import Mindmap from "@/components/Mindmap/Mindmap";

export default function page() {
  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]">
        Thêm mới
      </button>
      <div className="grid grid-cols-3">
        <h2>Tên</h2>
        <h2>Tạo lúc</h2>
        <h2>Hành động</h2>
      </div>
      <div className="grid grid-cols-3 mt-[16px]">
        <p>Mind map không tên</p>
        <p>Tạo lúc</p>
        <p>Hành động</p>
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
