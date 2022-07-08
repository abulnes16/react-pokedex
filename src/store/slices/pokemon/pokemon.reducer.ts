import { createSlice } from "@reduxjs/toolkit";
import { ErrorState, PokemonShortInfo, RequestState } from "../../../models";
import { fetchPokemons } from "./pokemon.thunks";

interface PokemonState {
  list: PokemonShortInfo[];
  pokemonName: string;
  request: RequestState;
  error: ErrorState;
}

const initialState: PokemonState = {
  list: [],
  pokemonName: "",
  request: RequestState.LOADING,
  error: {
    message: "",
    title: "",
  },
};

const pokemonSlice = createSlice({
  name: "pokemonReducer",
  initialState,
  reducers: {
    savePokemonName: (state, action) => {
      state.pokemonName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.list = action.payload;
      state.request = RequestState.SUCCESS;
    });

    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.request = RequestState.ERROR;
      state.error = action.payload as ErrorState;
    });

    builder.addCase(fetchPokemons.pending, (state) => {
      state.request = RequestState.LOADING;
    });
  },
});

export const { savePokemonName } = pokemonSlice.actions;

export default pokemonSlice.reducer;
