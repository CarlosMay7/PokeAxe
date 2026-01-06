import { useDispatch, useSelector } from 'react-redux';
import { previousPage, nextPage } from '../features/pokemon/pokemonSlice';

export const Pagination = () => {
    const dispatch = useDispatch();
    const { page } = useSelector(state => state.pokemon);

    return (
        <div className="flex justify-center items-center gap-6 mt-8">
            <button
                onClick={() => dispatch(previousPage())}
                disabled={page === 0}
                className="
          flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-slate-800 text-white
          border border-slate-700
          hover:bg-slate-700
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
            >
                <span>Anterior</span>
            </button>

            <div
                className="
                    px-4 py-2 rounded-lg
                    bg-slate-800 text-purple-400
                    font-semibold
                    border border-slate-700
                "
            >
                {page + 1}
            </div>

            <button
                onClick={() => dispatch(nextPage())}
                className="
                    flex items-center gap-2
                    px-4 py-2 rounded-lg
                    bg-purple-600 text-white
                    hover:bg-purple-500
                    transition
                "
            >
                <span>Siguiente</span>
            </button>
        </div>
    );
};
