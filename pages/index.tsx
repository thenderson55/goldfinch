import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/Image";
import imageLoader from "../imageLoader";
import { Character, GetCharacterResults } from "../types";
import styles from "./index.module.scss";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => (
  <div className={styles.container}>
    <h1>The value of customKey is: {process.env.customKey}</h1>
    PUBLIC ENV: {process.env.NEXT_PUBLIC_DB_CONNECTION}
    {characters.map((character) => {
      return (
        <div key={character.id}>
          <Link
            href={`
            /characters/${character.id}
          `}
          >
            <a>
              <h3>{character.name}</h3>
            </a>
          </Link>
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
