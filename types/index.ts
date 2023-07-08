interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  stats: [Stat];
  abilities: [string];
  moves: [move];
  flavorText: string;
  sprite: string;
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

export type { Pokemon, move, Stat };
