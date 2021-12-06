import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

function PostList({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <h1>POST LIST</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>
              <p>{post.title}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("POSTS", data);
  return {
    props: { posts: data.slice(0, 3) },
  };
};
