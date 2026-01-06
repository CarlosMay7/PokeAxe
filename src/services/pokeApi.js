const BAASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (limit = 6, offset = 0) => {
    const res = await fetch(`${BAASE_URL}?limit=${limit}&offset=${offset}`);
    if (!res.ok) {
        throw new Error('Error al buscar pokemons');
    }
    return res.json();
};

export const fetchPokemonByUrl = async url => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error al buscar pokemon');
    }
    return res.json();
};

export const getPokemonByName = async name => {
    const res = await fetch(`${BAASE_URL}/${name.toLowerCase()}`);
    if (!res.ok) {
        throw new Error('Pokemon no encontrado');
    }
    return res.json();
};
