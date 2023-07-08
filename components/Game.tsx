"use client";
import React, { useEffect, useState } from "react";
import image from "../public/placeholder.gif";
import Image from "next/image";
import type { Pokemon } from "../types";

const Game = () => {
  //fetch data from api
  const [data, setData] = useState<Pokemon>({
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    stats: [
      {
        base_stat: 0,
        effort: 0,
        name: "",
      },
    ],
    abilities: [""],

    moves: [
      {
        name: "",
        learn_method: "",
        game_version: "",
        level_learned_at: 0,
      },
    ],
    flavorText: "",
    sprite: "/../public/placeholder.gif",
  });
  useEffect(() => {
    fetch("http://localhost:3000/api/pokemon")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='game'>
      <div className='game-name'>
        <h1>{data.name.toUpperCase()}</h1>
      </div>
      <div className='game-board'>
        <Image
          src={data.sprite ? data.sprite : image}
          alt='Alt text for the picture'
          width={256}
          height={256}
        />
        <ul className='stats'>
          <li className='stat' id='hp'>
            HP: {data.stats.find((stat) => stat.name === "hp")?.base_stat}
          </li>
          <li className='stat' id='speed'>
            Speed: {data.stats.find((stat) => stat.name === "speed")?.base_stat}
          </li>
          <li className='stat' id='attack'>
            Attack:{" "}
            {data.stats.find((stat) => stat.name === "attack")?.base_stat}
          </li>
          <li className='stat' id='defense'>
            Defense:{" "}
            {data.stats.find((stat) => stat.name === "defense")?.base_stat}
          </li>
          <li className='stat' id='special-attack'>
            Special Attack:{" "}
            {
              data.stats.find((stat) => stat.name === "special-attack")
                ?.base_stat
            }
          </li>
          <li className='stat' id='special-defense'>
            Special Defense:{" "}
            {
              data.stats.find((stat) => stat.name === "special-defense")
                ?.base_stat
            }
          </li>
        </ul>
      </div>
      <div className='flavor-text'>
        <p>{data.flavorText}</p>
      </div>
    </div>
  );
};

export default Game;
