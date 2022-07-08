import {
  GetPokemonsResponse,
  GetPokemonsResult,
  PokemonShortInfo,
} from "../models";
import axios from "../modules/axios";

export async function getPokemons(limit: number): Promise<GetPokemonsResult> {
  try {
    const response = await axios.get<GetPokemonsResponse>(
      `pokemon?limit=${limit}`
    );
    if (response.status === 200) {
      return { kind: "ok", results: response.data.results };
    } else {
      throw new Error(response.toString());
    }
  } catch (error) {
    return {
      kind: "error",
      error: error as Error,
    };
  }
}

export async function getPokemonDetail(url: string) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.toString());
    }
  } catch (error) {
    return error;
  }
}
