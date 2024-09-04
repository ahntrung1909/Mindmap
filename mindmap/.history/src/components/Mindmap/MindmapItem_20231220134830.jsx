"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function MindmapItem({ data, index }) {
  const router = useRouter();

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
      </div>
    </div>
  );
}
