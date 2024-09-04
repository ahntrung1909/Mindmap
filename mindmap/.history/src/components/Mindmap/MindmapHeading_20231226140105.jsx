"use client";

import { useEffect } from "react";
import addNewAction from "./addNewAction";

export default function MindmapHeading({ data }) {
  return (
    <div>
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={() => {
          let length = data.length - 1;
          if (!data.length) {
            length = 0;
          }
          console.log(("length", length));
          addNewAction(data[length]?._id);
        }}
      >
        Thêm mới
      </button>
    </div>
  );
}
