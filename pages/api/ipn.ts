import type { NextApiRequest, NextApiResponse } from "next";
import type { NextRequest } from "next/server";
export const config = {
  runtime: "experimental-edge",
};
// https://ecommerce-electronics-six.vercel.app/api/ipn?topic=payment&id=123456
export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const topic = searchParams.get("topic");
  const id = searchParams.get("id");
  console.log({ topic, id });
  return new Response(
    JSON.stringify({
      name: "working IPN",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    }
  );
}
