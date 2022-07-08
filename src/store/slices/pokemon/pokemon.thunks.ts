import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../../../services/pokemon";
import { FETCH_POKEMONS } from "./pokemon.types";

export const fetchPokemons = createAsyncThunk(
  FETCH_POKEMONS,
  async (limit: number, { rejectWithValue }) => {
    try {
      const pokemons = await getPokemons(limit);
      if (pokemons.kind !== "ok") {
        throw pokemons;
      }

      return pokemons.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        title: "Fetch pokemon failed",
        message: (error as Error).message,
      });
    }
  }
);
