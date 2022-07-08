import { PokemonShortInfo, RequestState } from "../../../models";
import {
  FETCH_POKEMONS,
  FETCH_POKEMONS_FAILED,
  FETCH_POKEMONS_SUCCESS,
  PokemonActions,
  SAVE_POKEMON_NAME,
} from "./pokemon.types";

interface PokemonState {
  list: PokemonShortInfo[];
  pokemonName: string;
  request: RequestState;
}

const initialState: PokemonState = {
  list: [],
  pokemonName: "",
  request: RequestState.LOADING,
};

export default function reducers(
  state = initialState,
  action: PokemonActions
): PokemonState {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        request: RequestState.LOADING,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        request: RequestState.SUCCESS,
      };
    case FETCH_POKEMONS_FAILED:
      return {
        ...state,
        list: [],
        request: RequestState.ERROR,
      };
    case SAVE_POKEMON_NAME:
      return {
        ...state,
        pokemonName: action.payload,
      };
    default:
      return state;
  }
}
