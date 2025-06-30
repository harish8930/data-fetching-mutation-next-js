import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDbPage() {
  const products: Product[] = await getProducts();
  return (
    <>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700 mb-10 mt-5"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <form action={removeProduct.bind(null, product.id)}>
              <button
                type="submit"
                className="text-red-500 px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-400 "
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
