"use sever";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function addNewAction() {
  console.log("thêm thành công");

  try {
    const data = {
      userEmail: "buiquangtruong1105@gmail.com",
      name: "Mindmap không tên",
      title: "Chưa có title",
      data: [],
    };
    const res = await fetch("http://localhost:8080/api/v1/mindmap", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    revalidateTag("mindmaps");
    revalidatePath("/mindmap");
  } catch (error) {
    console.log(error);
  }
}
