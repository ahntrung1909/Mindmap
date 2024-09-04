import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";

export default function page({ params }) {
  console.log(params);
  return (
    <div>
      <Mindmap params={params} />
    </div>
  );
}
