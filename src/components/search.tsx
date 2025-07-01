import Form from "next/form";

export const Search = () => {
  return (
    <Form action="/products-db" className="flex gap-2">
      <input
        name="query"
        className="flex-1 px-4 rounded-lg border border-gray-300 focus:outline-1"
        placeholder="Search Product"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300"
      >
        Submit
      </button>
    </Form>
  );
};
