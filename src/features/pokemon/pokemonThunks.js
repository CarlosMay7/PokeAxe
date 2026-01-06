import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchPokemonByUrl,
    fetchPokemons,
    getPokemonByName,
} from '../../services/pokeApi';

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async ({ limit, offset }) => {
        const data = await fetchPokemons(limit, offset);

        const detailedPokemons = await Promise.all(
            data.results.map(pokemon => fetchPokemonByUrl(pokemon.url))
        );

        return detailedPokemons;
    }
);

export const searchPokemon = createAsyncThunk(
    'pokemon/searchPokemon',
    async name => {
        return await getPokemonByName(name);
    }
);
