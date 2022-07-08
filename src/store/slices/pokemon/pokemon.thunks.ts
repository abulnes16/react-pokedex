import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../..";
import { getPokemons } from "../../../services/pokemon";
import { savePokemonList, setPokemonError } from "./pokemon.actions";

export const fetchPokemons =
  (limit: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      const pokemons = await getPokemons(limit);
      if (pokemons.kind !== "ok") {
        throw pokemons;
      }

      dispatch(savePokemonList(pokemons.results));
    } catch (error) {
      console.log(error);
      dispatch(setPokemonError((error as Error).message));
    }
  };
