import Mindmap from "@/components/Mindmap/Mindmap_detail/Mindmap";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
export default function page({ params }) {
  return (
    <div>
      <Mindmap params={params} />
    </div>
  );
}
