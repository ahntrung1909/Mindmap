"use sever";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    if (res.status === 201) {
      redirect("/");
    }
    revalidateTag("mindmaps");
  } catch (error) {
    console.log(error);
  }
}
