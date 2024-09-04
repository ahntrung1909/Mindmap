"use sever";

import { revalidateTag } from "next/cache";

export default function addNewAction() {
  try {
    const data = {
      userEmail: "buiquangtruong1105@gmail.com",
      name: "Mindmap không tên",
      title: "Chưa có title",
      cache: "no-store",
      data: [],
    };
    const res = fetch("http://localhost:8080/api/v1/mindmap", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("mindmaps");
  } catch (error) {
    console.log(error);
  }
}
