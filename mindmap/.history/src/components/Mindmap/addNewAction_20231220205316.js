"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default async function addNewAction() {
  const { user } = await getSession();
  try {
    const data = {
      userId: user?.sid,
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
      // revalidateTag("mindmaps");
      console.log("Thêm thành công");
      redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
}
