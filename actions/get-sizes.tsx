import { Size } from "@/type";

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URLs, {
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

export default getSizes;
