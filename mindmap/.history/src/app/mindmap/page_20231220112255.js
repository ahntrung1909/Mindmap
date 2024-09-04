import Mindmap from "@/components/Mindmap/Mindmap";
import MindmapItem from "@/components/Mindmap/MindmapItem";
import { data } from "autoprefixer";
// const apiUrl = process.env.API_URL;
// console.log(apiUrl);
export default async function page() {
  const res = await fetch(`http://localhost:8080/api/v1/mindmap`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  let data;
  if (res.status === 200) {
    data = await res.json();
    console.log(typeof data);
  }
  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]">
        Thêm mới
      </button>
      <div className="grid grid-cols-5 font-bold text-[16px] p-[10px]">
        <p>Stt</p>
        <p className="col-span-2">Tên</p>
        <p>Tạo lúc</p>
        <p>Hành động</p>
      </div>
      {Array.from(data)?.map((item) => {
        console.log(item);
        return <MindmapItem />;
      })}
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
