/* Modules */
import axios from "../modules/axios";

export const getPokemons = async (limit) => {
    try {
        const response = await axios.get(`pokemon?limit=${limit}`);
        if (response.status === 200){
            return response.data.results;
        } else {
            throw new Error(response);
        }
    }catch(error){
        return error.response;
    }
}

export const getPokemonDetail = async (url) => {
    try{
        const response = await axios.get(url);
        if (response.status === 200){
            return response.data;
        }
    }catch(error) { 
        return error.response
    }
} 