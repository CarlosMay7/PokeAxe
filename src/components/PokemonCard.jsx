import { typeGradients } from '../utils/pokemonTypeColors';

export const PokemonCard = ({ pokemon }) => {
    const name = pokemon.name;
    const image =
        pokemon.sprites?.other?.['official-artwork']?.front_default ||
        pokemon.sprites?.front_default;

    const type = pokemon.types?.[0]?.type?.name || 'normal';
    const gradient = typeGradients[type] || typeGradients.normal;

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-slate-800 group transition-transform duration-300 hover:scale-[1.02]">
            <div
                className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-80`}
            />

            <div className="relative z-10 flex items-center justify-center h-40">
                <img
                    src={image}
                    alt={name}
                    className="
                        w-32 h-32 object-contain drop-shadow-xl
                        transition-transform duration-300 ease-out
                        group-hover:scale-110
                        group-hover:-translate-y-2
                    "
                />
            </div>

            <div className="relative z-10 bg-black/30 backdrop-blur-sm text-center py-3">
                <p className="text-white font-bold capitalize text-lg">
                    {name}
                </p>
            </div>
        </div>
    );
};
