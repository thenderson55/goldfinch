import React from "react";
import Image from "next/Image";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Character.module.css";

function CharacterPage({ character }) {
  const router = useRouter();
  console.log("QUERY", router.query);
  return (
    <div className={styles.container}>
      CharacterPage
      <h1>{character.name}</h1>
      <Image
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );

  const character = await res.json();
  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
