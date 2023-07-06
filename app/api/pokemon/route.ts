import { NextResponse } from "next/server";

//Get a random pokemon from the API with its relevant information
export async function GET(req: any, res: any) {
  //Fetch a random pokemon from the api
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1000)
  );

  //Convert the data to a JSON object
  const data = await response.json();

  interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    stats: [Stat];
    abilities: [string];
    moves: [move];
  }

  interface move {
    name: string;
    learn_method: string;
    game_version: string;
    level_learned_at?: number;
  }
  interface Stat {
    base_stat: number;
    effort: number;
    name: string;
  }

  //create a custom response with the data
  const pokemon: Pokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((stat: any) => {
      return {
        base_stat: stat.base_stat,
        effort: stat.effort,
        name: stat.stat.name,
      };
    }),
    abilities: data.abilities.map((ability: any) => {
      return ability.ability.name;
    }),
    moves: data.moves.map((move: any) => {
      return {
        name: move.move.name,
        learn_method: move.version_group_details[0].move_learn_method.name,
        game_version: move.version_group_details[0].version_group.name,
        level_learned_at: move.version_group_details[0].level_learned_at,
      };
    }),
  };

  //convert to string
  const pokemonJson = JSON.stringify(pokemon);

  return new NextResponse(pokemonJson, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
