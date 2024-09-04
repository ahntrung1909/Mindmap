"use client";
export default async function updateAction(id, flow, name, title) {
  console.log("flow", flow);
  const body = {
    name: name,
    title: title,
    flow: flow,
  };
  try {
    const res = await fetch(`http://localhost:8080/api/v1/mindmap/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}
