import { Bar } from './Bar';
import { SearchBar } from './SearchBar';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
                    <Bar />
                    <SearchBar />
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </div>
    );
};
