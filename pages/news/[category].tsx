import { GetServerSideProps } from "next";
import React from "react";
import { ArticleType } from ".";

function ArticleListByCategory({
  articles,
  category,
}: {
  articles: ArticleType[];
  category: string;
}) {
  return (
    <div>
      <h1>Showing News for {category}</h1>
      {articles.map((article) => {
        return <div key={article.id}>{article.title}</div>;
      })}
    </div>
  );
}

export default ArticleListByCategory;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader("Set-Cookie", ["name=Tommy"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
