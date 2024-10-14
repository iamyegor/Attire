import SearchSvg from "@/assets/search.svg?react";
import CrossSvg from "@/assets/cross.svg?react";
import { useNavigate } from "react-router-dom";
import useSearchTerm from "@/components/RootLayout/Header/hooks/useSearchTerm.ts";
import useSearchTranslations from "./hooks/useSearchTranslations";

interface SearchComponentProps {
    onClose: () => void;
}

export default function SearchComponent({ onClose }: SearchComponentProps) {
    const { searchTerm, setSearchTerm } = useSearchTerm();
    const navigate = useNavigate();
    const t = useSearchTranslations();

    function onSearch(term: string) {
        if (term.trim().length > 0) {
            onClose();
            navigate(`/search?searchTerm=${term}`);
        }
    }

    function clearSearchTerm() {
        setSearchTerm("");
    }

    return (
        <div className="w-full min-h-screen sm:min-h-full md:max-w-[700px] p-5 xs:px-8 mx-auto">
            <button
                className="text-neutral-700 w-full text-right mb-8 font-medium block sm:hidden"
                onClick={onClose}
            >
                {t?.close}
            </button>
            <div className="flex space-x-3">
                <div className="text-lg font-semibold text-neutral-600 hover:text-neutral-700 bg-neutral-100 pl-3 p-2 pr-4 rounded-full flex items-center gap-x-2 w-full">
                    <SearchSvg className="hidden sm:block sm:mr-2 w-5 h-5 flex-shrink-0 fill-neutral-400" />
                    <input
                        name="search"
                        className="focus:outline-none bg-transparent w-full placeholder:text-neutral-400"
                        type="text"
                        placeholder={t?.placeholder}
                        aria-label="Search input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onSearch(searchTerm)}
                    />
                    {searchTerm.length > 0 && (
                        <button onClick={clearSearchTerm}>
                            <CrossSvg className="w-7 h-7 fill-neutral-400" />
                        </button>
                    )}
                </div>
                <button
                    className="bg-blue-500 text-white p-2 px-3 rounded-full"
                    onClick={() => onSearch(searchTerm)}
                >
                    {t?.search}
                </button>
                <button
                    className="lg:absolute hidden sm:block top-7 right-7 text-neutral-700 font-medium"
                    onClick={onClose}
                >
                    {t?.close}
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-600 text-base xs:text-lg mb-4">
                    {t?.popularSearchTerms.name}
                </p>
                <ul className="space-y-2">
                    {t?.popularSearchTerms.terms.map((term, index) => (
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
