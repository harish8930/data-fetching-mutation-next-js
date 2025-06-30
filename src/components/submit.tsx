"use client";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer"
      >
        Submit
      </button>
    </>
  );
}
