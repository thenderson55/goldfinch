import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

function Blog({ data }: { data: string }) {
  return <div>{data}</div>;
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log({ session });
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callBackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "My collection of blog posts" : "All blog posts",
    },
  };
};
