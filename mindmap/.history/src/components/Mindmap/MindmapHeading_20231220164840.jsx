"use client";
import addNewAction from "./addNewAction";
export default function MindmapHeading() {
  const addNewMindMap = async () => {};
  return (
    <div>
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={() => {
          addNewAction();
        }}
      >
        Thêm mới
      </button>
    </div>
  );
}
