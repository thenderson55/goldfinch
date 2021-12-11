import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React, { Component, ReactElement, ReactNode } from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Layout/Navbar";
import "../styles/global.css";
// import "../components/Layout/Navbar.css";

// This default export is required in a new `pages/_app.js` file.
type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Goldfinch</title>
        <meta name="description" content="inventory management" />
      </Head>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
