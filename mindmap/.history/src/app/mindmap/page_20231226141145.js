import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";
import MindmapHeading from "@/components/Mindmap/MindmapHeading";
import MindmapItem from "@/components/Mindmap/MindmapItem";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function page() {
  const { user } = await getSession();
  const res = await fetch(`${process.env.API_URL}/user/${user.sub}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    next: { tags: ["mindmaps"] },
  });
  let data;
  if (res.status === 200) {
    data = await res.json();
  }

  return (
    <div className="1250px mx-auto px-[25px] flex flex-col mb-[10px]">
      <MindmapHeading data={data} />
      <div className="grid grid-cols-5 font-bold text-[16px] p-[10px]">
        <p>Stt</p>
        <p className="col-span-2">Tên</p>
        <p>Tạo lúc</p>
        <p>Hành động</p>
      </div>
      {Array.from(data)?.map((item, index) => {
        return <MindmapItem key={item._id} data={item} index={++index} />;
      })}
    </div>
  );
}
