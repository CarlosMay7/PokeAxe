import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from '../features/pokemon/pokemonThunks';
import { Pagination } from '../components/Pagination';
import { PokemonCard } from '../components/PokemonCard';
import { StatusMessage } from '../components/StatusMessage';

const LIMIT = 6;

export const Home = () => {
    const dispatch = useDispatch();

    const { pokemons, searchResult, loading, page, error } = useSelector(
        state => state.pokemon
    );

    useEffect(() => {
        if (!searchResult) {
            dispatch(getPokemons({ limit: LIMIT, offset: page * LIMIT }));
        }
    }, [dispatch, page, searchResult]);

    if (loading) {
        return <StatusMessage type="loading" message="Cargando Pokémon..." />;
    }

    if (error) {
        return <StatusMessage type="error" message={error} />;
    }

    if (searchResult) {
        return (
            <div className="px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <PokemonCard pokemon={searchResult} />
                </div>
            </div>
        );
    }

    if (pokemons.length === 0) {
        return <StatusMessage message="No se encontraron Pokémon." />;
    }

    return (
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>

            <div className="mt-8">
                <Pagination />
            </div>
        </div>
    );
};
