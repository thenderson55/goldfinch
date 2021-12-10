import React, { ChangeEvent, useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  const deleteComment = async (commentId: string) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value)
        }
      />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={fetchComments}>Press to get comments</button>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.text}
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentsPage;
