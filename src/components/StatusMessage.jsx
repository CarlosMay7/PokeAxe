export const StatusMessage = ({ message, type = 'info' }) => {
    const styles = {
        loading: 'text-purple-400',
        error: 'text-red-400',
        info: 'text-slate-300',
    };

    return (
        <div className="flex justify-center items-center h-64">
            <div
                className="
                    flex flex-col items-center gap-4
                    px-6 py-4 rounded-xl
                    bg-slate-800/80
                    backdrop-blur
                    shadow-lg
                "
            >
                {type === 'loading' && (
                    <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin" />
                )}

                <p className={`text-lg font-semibold ${styles[type]}`}>
                    {message}
                </p>
            </div>
        </div>
    );
};
