import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const response = await fetch(
    `https://mindmapdb.onrender.com/api/v1/mindmap/${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return {
    title: data.name,
    description: data.title,
  };
}
export default function page({ params }) {
  return (
    <div>
      <Mindmap params={params} />
    </div>
  );
}
