import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Layout/Navbar";
import "../styles/global.css";
// import "../components/Layout/Navbar.css";

// This default export is required in a new `pages/_app.js` file.
type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Goldfinch Authed</title>
        <meta name="description" content="inventory management" />
      </Head>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

// function Auth({ children }) {
//   const { data: session, status } = useSession();
//   const isUser = !!session?.user;
//   React.useEffect(() => {
//     if (status === "loading") return; // Do nothing while loading
//     // if (!isUser) signIn(); // If not authenticated, force log in
//   }, [isUser, status]);

//   if (isUser) {
//     return children;
//   }

//   // Session is being fetched, or no user.
//   // If no user, useEffect() will redirect.
//   return <div>Loading...</div>;
// }
