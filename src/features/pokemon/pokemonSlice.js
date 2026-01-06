import { createSlice } from '@reduxjs/toolkit';
import { getPokemons, searchPokemon } from './pokemonThunks';

const initialState = {
    pokemons: [],
    search: '',
    searchResult: null,
    loading: false,
    error: null,
    page: 0,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: state => {
            state.search = '';
            ((state.searchResult = null), (state.error = null));
        },
        nextPage: state => {
            state.page += 1;
        },
        previousPage: state => {
            if (state.page > 0) {
                state.page -= 1;
            }
        },
        resetPage: state => {
            state.page = 0;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getPokemons.pending, state => {
                state.loading = true;
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemons = action.payload;
            })
            .addCase(getPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchPokemon.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResult = action.payload;
            })
            .addCase(searchPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { nextPage, previousPage, resetPage, setSearch, clearSearch } =
    pokemonSlice.actions;
export default pokemonSlice.reducer;
