"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function MindmapItem({ data, index }) {
  const [deleted, setDeleted] = useState(false);

  const deleteMindmap = async () => {
    const res = await fetch(`${process.env.API_URL}/${data?._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("Xóa thành công");
    }
  };
  useEffect(() => {
    if (deleted) {
      deleteMindmap();
    }
  }, [deleted]);

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
        <button onClick={() => setDeleted(true)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
