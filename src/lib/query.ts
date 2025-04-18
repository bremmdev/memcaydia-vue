import type { Game } from "./types";
import { slugify } from "./utils";

export async function getGames() {
  try {
    const response = await fetch("/api/games");

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const games = (await response.json()) as Promise<Game[]>;
    return games;
  } catch {
    throw new Error("Failed to fetch games");
  }
}

export async function getGame(slug: string) {
  try {
    const games = await getGames();

    const game = games?.find((game) => slugify(game.name) === slug);
    // const highscoresFromLocalStorage = getHighscores();
    return game || null; // Return null if game is not found
  } catch {
    throw new Error("Could not load game");
  }
}
