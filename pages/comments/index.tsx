import React, { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <button onClick={() => fetchComments()}>Press to get comments</button>
      <div>
        {comments.map((comment) => {
          return <div key={comment.id}>{comment.text}</div>;
        })}
      </div>
    </div>
  );
}

export default CommentsPage;
