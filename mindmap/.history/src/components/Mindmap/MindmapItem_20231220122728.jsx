"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function MindmapItem({ data, index }) {
  const fetcher = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/mindmap/${data._id}`
    );
    return await response.json();
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
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
