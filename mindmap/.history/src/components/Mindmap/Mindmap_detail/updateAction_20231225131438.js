"use server";
export default async function updateAction(id, flow) {
  try {
    const res = await fetch(`http://localhost:8080/api/v1/mindmap/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(flow),
      cache: "no-store",
    });
    if (res.status === 200) {
      console.log("Lưu thành công!");
    }
  } catch (error) {
    console.log(error);
  }
}
