"use client";
import { revalidateTag } from "next/cache";
import addNewAction from "./addNewAction";
import { redirect } from "next/navigation";
import { data } from "autoprefixer";
export default function MindmapHeading({ data }) {
  return (
    <div>
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={async () => {
          let result = addNewAction();
          if (result) {
            const data = Array.from(data);
            redirect(`/mindmap/${data[data.length - 1]._id}`);
          }
        }}
      >
        Thêm mới
      </button>
    </div>
  );
}
