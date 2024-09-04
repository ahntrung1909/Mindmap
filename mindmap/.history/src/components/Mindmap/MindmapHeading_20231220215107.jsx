"use client";
import { revalidateTag } from "next/cache";
import addNewAction from "./addNewAction";
export default function MindmapHeading({ data }) {
  return (
    <div>
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={() => {
          addNewAction(data);
        }}
      >
        Thêm mới
      </button>
    </div>
  );
}
