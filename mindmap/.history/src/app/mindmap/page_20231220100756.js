import Mindmap from "@/components/Mindmap/Mindmap";

export default function page() {
  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]">
        Thêm mới
      </button>
      <div className="grid grid-cols-5 font-bold text-[16px]">
        <p>Stt</p>
        <p className="col-span-2">Tên</p>
        <p>Tạo lúc</p>
        <p>Hành động</p>
      </div>
      <div className="grid grid-cols-5 mt-[16px] pointer">
        <p>1</p>
        <p className="col-span-2">Mind map không tên</p>
        <p>10/11/2022</p>
        <div className="text-xl flex gap-[10px] justify">
          <button>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
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
