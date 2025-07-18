"use client";

import Submit from "@/components/submit";
import { useActionState } from "react";
import { FormState, updateProduct } from "@/actions/products";
import { Product } from "@/app/products-db/page";

export default function EditProductForm({ product }: { product: Product }) {
  const initialFormState: FormState = {
    errors: {},
  };

  const editProductWithId = updateProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-white border rounded"
            name="title"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-white border rounded"
            name="price"
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-white border rounded"
            name="description"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <Submit />
    </form>
  );
}
