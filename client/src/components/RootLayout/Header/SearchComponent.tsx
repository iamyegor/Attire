import SearchSvg from "@/assets/search.svg?react";
import CrossSvg from "@/assets/cross.svg?react";
import { useNavigate } from "react-router-dom";
import useSearchTerm from "@/components/RootLayout/Header/hooks/useSearchTerm.ts";

interface SearchComponentProps {
    onClose: () => void;
}

export default function SearchComponent({ onClose }: SearchComponentProps) {
    const { searchTerm, setSearchTerm } = useSearchTerm();
    const navigate = useNavigate();

    const popularSearchTerms = ["Air Force 1", "Jordan", "Air Max", "Blazer"];

    function onSearch(term: string) {
        if (term.trim().length > 0) {
            navigate(`/search?searchTerm=${term}`);
            onClose();
        }
    }

    function clearSearchTerm() {
        setSearchTerm("");
    }

    return (
        <div className="w-full min-h-screen sm:min-h-full md:max-w-[700px] px-2 xs:px-8 mx-auto py-4">
            <button className="text-neutral-700 mb-3 font-medium block sm:hidden" onClick={onClose}>
                Закрыть
            </button>
            <div className="flex space-x-3">
                <div className="text-lg font-semibold text-neutral-600 hover:text-neutral-700 bg-neutral-100 pl-3 p-2 pr-3 rounded-full flex items-center space-x-4 w-full">
                    <SearchSvg className="w-5 h-5 flex-shrink-0" />
                    <input
                        name="search"
                        className="text-sm xs:text-base focus:outline-none bg-transparent w-full placeholder:text-neutral-400"
                        type="text"
                        placeholder="Искать"
                        aria-label="Search input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onSearch(searchTerm)}
                    />
                    {searchTerm.length > 0 && (
                        <button onClick={clearSearchTerm}>
                            <CrossSvg className="w-4 h-4 text-neutral-500" />
                        </button>
                    )}
                </div>
                <button
                    className="bg-blue-500 text-white p-2 px-3 rounded-full"
                    onClick={() => onSearch(searchTerm)}
                >
                    Поиск
                </button>
                <button
                    className="lg:absolute hidden sm:block top-4 right-4 text-neutral-700 font-medium"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-600 text-lg mb-4">Популярные поисковые запросы</p>
                <ul className="space-y-2">
                    {popularSearchTerms.map((term, index) => (
                        <li
                            key={index}
                            className="text-gray-800 py-1 cursor-pointer text-xl font-medium"
                            onClick={() => onSearch(term)}
                        >
                            {term}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
