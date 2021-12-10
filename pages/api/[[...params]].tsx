import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query.params;
  res.status(200).json(params);
}

export default handler;
