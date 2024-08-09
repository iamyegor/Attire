import { useState } from "react";
import SearchSvg from "@/assets/search.svg?react";
import CrossSvg from "@/assets/cross.svg?react";

interface SearchComponentProps {
    onClose: () => void;
}

function SearchComponent({ onClose }: SearchComponentProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const popularSearchTerms = ["Air Force 1", "Jordan", "Air Max", "Blazer"];

    function onSearch(term: string) {
        console.log(`Searching for ${term}`);
    }

    function clearSearchTerm() {
        setSearchTerm("");
    }

    return (
        <div className="w-full min-h-screen sm:min-h-full md:max-w-[700px] px-2 xs:px-8 mx-auto py-4">
            <div className="flex">
                <div className="text-lg font-semibold text-neutral-600 hover:text-neutral-700 bg-neutral-100 pl-3 p-2 pr-3 rounded-full flex items-center space-x-4 w-full">
                    <SearchSvg className="w-6 h-6 flex-shrink-0" />
                    <input
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
                            <CrossSvg className="w-5 h-5 text-neutral-500" />
                        </button>
                    )}
                </div>
                <button
                    className="lg:absolute top-4 right-2 flex-shrink-0 border-transparent border-4 text-neutral-700 py-1 px-2 rounded font-medium"
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

export default SearchComponent;
