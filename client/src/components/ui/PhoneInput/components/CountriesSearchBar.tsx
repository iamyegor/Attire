import SearchSvg from "@/assets/search.svg?react";

interface CountriesSearchBarProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function CountriesSearchBar({ search, setSearch }: CountriesSearchBarProps) {
    return (
        <div
            className="bg-white p-1.5 border border-neutral-300 rounded-md flex items-center 
        space-x-1.5"
        >
            <div className="bg-neutral-200 h-full p-2 rounded-lg">
                <SearchSvg className="w-5 h-5" />
            </div>
            <div className="bg-neutral-200 h-full p-1.5 rounded-md flex-1">
                <input
                    className="ml-1 outline-none w-full bg-transparent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    data-testid="CountriesSearchBar.Input"
                />
            </div>
        </div>
    );
}
