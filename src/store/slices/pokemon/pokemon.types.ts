// Action Types

import { ErrorState, PokemonShortInfo } from "../../../models";

export const FETCH_POKEMONS = "POKEMON/FETCH";
export const FETCH_POKEMONS_SUCCESS = "POKEMON/FETCH/SUCCESS";
export const FETCH_POKEMONS_FAILED = "POKEMON/FETCH/FAILED";
export const SAVE_POKEMON_NAME = "POKEMON/SEARCH_BY_NAME";

export type FetchPokemonAction = {
  type: typeof FETCH_POKEMONS;
};

export type FetchPokemonActionSuccess = {
  type: typeof FETCH_POKEMONS_SUCCESS;
  payload: PokemonShortInfo[];
};

export type PokemonFailedAction = {
  type: typeof FETCH_POKEMONS_FAILED;
  payload: ErrorState;
};

export type SavePokemonName = {
  type: typeof SAVE_POKEMON_NAME;
  payload: string;
};

export type PokemonActions =
  | FetchPokemonAction
  | SavePokemonName
  | FetchPokemonActionSuccess
  | PokemonFailedAction;

export default {
  FETCH_POKEMONS,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILED,
};
