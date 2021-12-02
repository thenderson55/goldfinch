import React from "react";
import Image from "next/Image";

import { GetCharacterResults } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";

function CharacterPage({ character }) {
  return (
    <div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } };
    }),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
