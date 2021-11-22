import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/Image";
import imageLoader from "../imageLoader";
import { Character, GetCharacterResults } from "../types";
import styles from "./index.module.scss";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>The value of customK is: {process.env.customKey}</h1>
    {characters.map((character) => {
      return (
        <div key={character.id}>
          <li>{character.name}</li>;
          <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width="200"
            height="200"
          />
        </div>
      );
    })}
    <main>
      <h1 className={styles.title}>
        Welcome <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new" className={styles.card}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  </div>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
