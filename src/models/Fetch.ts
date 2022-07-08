import { PokemonShortInfo } from "./Pokemon";

export enum RequestState {
  LOADING,
  ERROR,
  SUCCESS,
}

export interface SuccessFetch {
  kind: "ok";
}

export interface FetchError {
  kind: "error";
  error: Error;
}

export interface GetPokemonsResponse extends SuccessFetch {
  results: PokemonShortInfo[];
}

export type GetPokemonsResult = GetPokemonsResponse | FetchError;
