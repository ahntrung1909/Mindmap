import React from "react";

export default function MindmapItem({ data, index }) {
  return (
    <div className="grid grid-cols-5 mt-[16px] cursor-pointer hover:bg-gray-200 p-[10px] rounded-[10px]">
      <p>{index}</p>
      <p className="col-span-2">{data.name}</p>
      <p>{data.createdAt}</p>
      <div className="text-xl flex gap-[10px] justify">
        <button>
          <Link>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </button>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
