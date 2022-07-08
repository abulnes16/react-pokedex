import { PokemonShortInfo } from "../../../models";
import {
  FETCH_POKEMONS_SUCCESS,
  FetchPokemonActionSuccess,
  PokemonFailedAction,
  FETCH_POKEMONS_FAILED,
  SavePokemonName,
  SAVE_POKEMON_NAME,
} from "./pokemon.types";

export function savePokemonList(
  pokemons: PokemonShortInfo[]
): FetchPokemonActionSuccess {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons,
  };
}

export function setPokemonError(errorMessage: string): PokemonFailedAction {
  return {
    type: FETCH_POKEMONS_FAILED,
    payload: {
      title: "Failed Fetching Pokemon",
      message: errorMessage,
    },
  };
}

export function savePokemonName(name: string): SavePokemonName {
  return {
    type: SAVE_POKEMON_NAME,
    payload: name,
  };
}
