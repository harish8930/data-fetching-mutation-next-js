import { getProducts } from "@/prisma-db";

type Product = {
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
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
