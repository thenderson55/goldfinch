import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(comments);
}

export default handler;
