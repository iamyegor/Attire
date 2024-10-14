import { useMemo } from "react";

const searchPageTranslations = [
    {
        locale: "en",
        searchResultsFor: "Search results for",
        noResults: "No results found for your query",
    },
    {
        locale: "ru",
        searchResultsFor: "Результаты поиска для",
        noResults: "Ничего не нашлось по вашему запросу",
    },
];

export type SearchPageTranslation = (typeof searchPageTranslations)[0];

export default function useSearchPageTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            searchPageTranslations.find((translation) => translation.locale === currentLanguage) ??
            searchPageTranslations[0]
        );
    }, [currentLanguage]);
}
