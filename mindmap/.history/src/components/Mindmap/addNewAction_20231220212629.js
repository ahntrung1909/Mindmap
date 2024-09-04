"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";

export default async function addNewAction() {
  const router = useRouter();
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
      },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      console.log("Thêm thành công");
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  }
}
