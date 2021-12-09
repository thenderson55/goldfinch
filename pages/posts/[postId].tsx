import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostType } from ".";

function Post({ post }: { post: PostType }) {
  return (
    <>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    paths: data.map((post) => {
      return { params: { postId: String(post.id) } };
    }),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
};
