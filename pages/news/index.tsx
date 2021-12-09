import { GetServerSideProps } from "next";
import React from "react";

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  category: string;
};

function NewsArticleList({ articles }: { articles: ArticleType[] }) {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return <div key={article.id}>{article.title}</div>;
      })}
    </div>
  );
}

export default NewsArticleList;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
