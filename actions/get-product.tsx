import { Product } from "@/type";

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URLs}/${id}`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-store", // Prevents caching on the client-side
    },
    cache: "no-store", // Explicitly set fetch cache mode to 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return data;
};

export default getProduct;
