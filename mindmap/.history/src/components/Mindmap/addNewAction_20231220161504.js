"use sever";

import { revalidateTag } from "next/cache";

export default function addNewAction() {
  const res = fetch("http://localhost:8080/api/v1/mindmap", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      userEmail: "buiquangtruong1105@gmail.com",
      name: "Mindmap không tên",
      title: "Chưa có title",
      data: [],
    },
  });
  if (res.state === 200) {
    revalidateTag("mindmaps");
  }
}
