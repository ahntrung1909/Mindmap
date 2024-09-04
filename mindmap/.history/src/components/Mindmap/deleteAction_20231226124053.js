"use server";
import { revalidateTag } from "next/cache";
export default async function deleteAction(data) {
  try {
    const res = await fetch(`${process.env.API_URL}/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      cache: "no-store",
    });
    if (res.status === 200) {
      console.log("Xóa thành công");
      revalidateTag("mindmaps");
    }
  } catch (error) {
    console.log(error);
  }
}
