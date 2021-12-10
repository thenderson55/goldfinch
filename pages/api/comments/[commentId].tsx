import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId as string)
  );
  if (req.method === "GET") {
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId as string)
    );
    comments.splice(index, 1);
    res.status(200).json(comment);
  }
}

export default handler;
