"use server";
import { revalidateTag } from "next/cache";
export default function DeleteButton({ data }) {
  const deleteMindmap = async () => {
    "use server";
    console.log(data._id);
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/mindmap/${data._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        // revalidatePath("/mindmap");
        revalidateTag("mindmaps");
        router.refresh();
        console.log("Xóa thành công");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={deleteMindmap}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
}
