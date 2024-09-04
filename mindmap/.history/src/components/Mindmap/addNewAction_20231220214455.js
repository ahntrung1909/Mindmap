"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default async function addNewAction() {
  const { user } = await getSession();
  try {
    const data = {
      userId: user?.sub,
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
    if (res.status === 201) {
      const data = await res.json();
      console.log(data);
      console.log("Thêm thành công");
    }
  } catch (error) {
    console.log(error);
  }
}
