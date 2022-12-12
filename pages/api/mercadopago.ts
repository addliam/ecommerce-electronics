// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanityClient";
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  //   access_token: process.env.NEXT_PRIV_MERCADOPAGO_ACCESS_TOKEN,
  access_token: process.env.NEXT_PRIV_T_MERCADOPAGO_ACCESS_TOKEN,
});

type Data = {
  name: string;
};

const isNumeric = (v: any): boolean => {
  return !isNaN(v);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // @data: productId, quantity
  if (req.method === "POST") {
    // Crea un objeto de preferencia
    if (!req.body.id || !req.body.quantity || !isNumeric(req.body.quantity)) {
      res.status(400).json({ error: "Missing params: id, quantity" });
    }
    let QUERY = `*[_type == "product" && _id == "${req.body.id}"][0] {
        _id,
        name,
        currentPrice,
      }`;
    try {
      const product = await client.fetch(QUERY);
      // curlp http://localhost:3000/api/mercadopago -d '{"id":"51a74580-8a50-4b23-8dba-d6db01806efd","quantity":"1"}'
      let preference = {
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending",
        },
        auto_return: "approved",
        items: [
          {
            id: product._id,
            title: product.name,
            unit_price: product.currentPrice,
            quantity: Number(~~req.body.quantity),
          },
        ],
      };
      const responseMercadoPago = await mercadopago.preferences.create(
        preference
      );
      console.log(responseMercadoPago.body);
      res.status(200).json({ success: "VALID ID. Found in database" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Invalid id. Not found in database" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
