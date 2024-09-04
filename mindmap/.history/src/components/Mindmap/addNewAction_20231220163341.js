"use sever";

import { revalidateTag } from "next/cache";

export default async function addNewAction() {
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
    });
    console.log(res);
    if (res.status === 200) {
      console.log("thêm thành công");
      revalidateTag("mindmaps");
    }
  } catch (error) {
    console.log(error);
  }
}
