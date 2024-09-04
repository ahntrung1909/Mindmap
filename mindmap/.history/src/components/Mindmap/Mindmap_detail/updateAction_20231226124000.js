"use client";
export default async function updateAction(id, flow, name, title) {
  console.log("flow", flow);
  const body = {
    name: name,
    title: title,
    flow: flow,
  };
  try {
    const res = await fetch(`${process.env.API_URL}${id}`, {
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
