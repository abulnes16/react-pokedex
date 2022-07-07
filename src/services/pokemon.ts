import axios from "../modules/axios";

export async function getPokemons(limit: number) {
  try {
    const response = await axios.get(`pokemon?limit=${limit}`);
    if (response.status === 200) {
      return response.data.results;
    } else {
      throw new Error(response.toString());
    }
  } catch (error) {
    return error;
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
