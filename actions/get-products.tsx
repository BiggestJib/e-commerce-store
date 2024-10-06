import { Product } from "@/type";
import qs from "query-string";

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/products`;
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URLs,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url, {
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

export default getProducts;
