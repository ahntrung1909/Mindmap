"use server";
export default function DeleteButton({ data }) {
  return (
    <button onClick={deleteMindmap}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
}
