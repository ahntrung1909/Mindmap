import React from "react";

export default function MindmapItem({ data }) {
  return (
    <div className="grid grid-cols-5 mt-[16px] cursor-pointer hover:bg-gray-200 p-[10px] rounded-[10px]">
      <p>1</p>
      <p className="col-span-2">{data.name}</p>
      <p>10/11/2022</p>
      <div className="text-xl flex gap-[10px] justify">
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
