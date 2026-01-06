export const Bar = () => {
    return (
        <header
            className="
        sticky top-0 z-50
        w-full
        bg-slate-900/80 backdrop-blur
        border-b border-slate-800
      "
        >
            <div
                className="
          max-w-6xl mx-auto
          px-4 sm:px-6
          h-16
          flex items-center justify-between
        "
            >
                <div className="flex items-center gap-2">
                    <img
                        src="/pokeball.svg"
                        alt="Pokeball"
                        className="w-6 h-6 transition-transform hover:rotate-12"
                    />

                    <h1 className="text-lg sm:text-xl font-bold text-white">
                        PokeAxe
                    </h1>
                </div>

                <div className="text-right">
                    <p className="text-sm sm:text-base text-purple-400 font-semibold">
                        Carlos Augusto May Vivas
                    </p>
                    <p className="hidden sm:block text-xs text-slate-400">
                        Fullstack Developer
                    </p>
                </div>
            </div>
        </header>
    );
};
