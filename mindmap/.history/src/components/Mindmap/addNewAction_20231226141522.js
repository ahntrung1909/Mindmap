"use server";

import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export default async function addNewAction() {
  const { user } = await getSession();
  const data = {
    userId: user?.sub,
    name: "Mindmap không tên",
    title: "Chưa có title",
    data: [],
  };
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  console.log(id);
  if (res.status === 201) {
    const response = await fetch(`${process.env.API_URL}/user/${user.sub}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      next: { tags: ["mindmaps"] },
    });

    const data2 = await response.json();
    console.log(data2);
    // return redirect(`/mindmap/${id}`);
  }
}
