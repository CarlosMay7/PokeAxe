import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'lucide-react';

import { searchPokemon } from '../features/pokemon/pokemonThunks';
import {
    setSearch,
    clearSearch,
    resetPage,
} from '../features/pokemon/pokemonSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.pokemon.search);
    const isDisabled = !search.trim();

    const handleSubmit = e => {
        e.preventDefault();
        if (!search.trim()) {
            return;
        }
        dispatch(resetPage());
        dispatch(searchPokemon(search));
    };

    const handleClear = () => {
        dispatch(clearSearch());
        dispatch(resetPage());
    };

    const handleChange = e => {
        const value = e.target.value;
        dispatch(setSearch(value));

        if (value === '') {
            dispatch(clearSearch());
            dispatch(resetPage());
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                flex flex-col sm:flex-row
                items-stretch sm:items-center
                gap-2
                bg-slate-800/80 backdrop-blur
                rounded-xl p-3
                border border-slate-700
                shadow-md
            "
        >
            <div className="hidden sm:flex items-center ml-2">
                <Search className="text-slate-400" size={18} />
            </div>

            <input
                value={search}
                onChange={handleChange}
                placeholder="Buscar Pokémon..."
                className="
                    flex-1 bg-transparent text-white
                    placeholder-slate-400
                    outline-none
                    px-3 py-2
                    rounded-lg
                "
            />

            <div className="flex gap-2">
                {search && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="
                            flex-1 sm:flex-none
                            px-3 py-2 rounded-lg
                            bg-slate-700 text-slate-200
                            hover:bg-slate-600
                            transition
                        "
                    >
                        Limpiar
                    </button>
                )}

                <button
                    type="submit"
                    disabled={isDisabled}
                    className={`
                        flex-1 sm:flex-none
                        px-4 py-2 rounded-lg
                        font-semibold
                        transition
                        ${
                            isDisabled
                                ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                                : 'bg-purple-600 text-white hover:bg-purple-500'
                        }
                    `}
                >
                    Buscar
                </button>
            </div>
        </form>
    );
};
