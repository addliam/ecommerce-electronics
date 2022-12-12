import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log({ req });
  console.log({ res });
  res.status(200).json({ res });
}
