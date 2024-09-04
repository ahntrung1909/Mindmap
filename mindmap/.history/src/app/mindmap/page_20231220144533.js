import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";
import MindmapItem from "@/components/Mindmap/MindmapItem";

export default async function page() {
  const res = await fetch(`http://localhost:8080/api/v1/mindmap`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    next: { tags: ["mindmaps"] },
  });
  let data;
  if (res.status === 200) {
    data = await res.json();
    console.log(typeof data);
  }

  return (
  
      {Array.from(data)?.map((item, index) => {
        return <MindmapItem key={item._id} data={item} index={++index} />;
      })}
    </div>
  );
}
