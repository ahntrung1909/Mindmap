"use client";
import Link from "next/link";
export default function MindmapItem({ data, index }) {
  const deleteMindmap = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("Xóa thành công");
    }
  };
  return (
    <div className="grid grid-cols-5 mt-[16px] cursor-pointer hover:bg-gray-200 p-[10px] rounded-[10px]">
      <p>{index}</p>
      <p className="col-span-2">{data.name}</p>
      <p>{data.createdAt}</p>
      <div className="text-xl flex gap-[10px] justify">
        <button>
          <Link href={`/mindmap/${data._id}`}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </button>
        <button onClick={deleteMindmap}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
