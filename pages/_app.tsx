import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Component, ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
