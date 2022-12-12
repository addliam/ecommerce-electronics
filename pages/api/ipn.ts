import type { NextApiRequest, NextApiResponse } from "next";
import type { NextRequest } from "next/server";
export const config = {
  runtime: "experimental-edge",
};
// https://ecommerce-electronics-six.vercel.app/api/ipn?topic=payment&id=123456
// http://localhost:3000/products?success=true&collection_id=1311320481&collection_status=approved&payment_id=1311320481&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=6813588479&preference_id=1260702847-c25000d2-bb38-432f-a164-791225698738&site_id=MPE&processing_mode=aggregator&merchant_account_id=null
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
