import type { Game } from "./types";

export async function getGames() {
  try {
    const response = await fetch("/api/games");

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const games = await response.json() as Promise<Game[]>;
    return games;
  } catch {
    throw new Error("Failed to fetch games");
  }
}