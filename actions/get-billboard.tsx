import { Billboard } from "@/type";

const URLs = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
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

export default getBillboard;
