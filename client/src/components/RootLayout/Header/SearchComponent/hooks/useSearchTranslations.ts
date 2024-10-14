export const searchTranslations = [
    {
        locale: "en",
        popularSearchTerms: {
            name: "Popular search terms",
            terms: [
                "Oversized Shirt",
                "Cargo Hoodie",
                "Short Shorts",
                "Extended Jeans",
            ],
        },
        placeholder: "Search for clothes",
        search: "Search",
        close: "Close",
    },
    {
        locale: "ru",
        popularSearchTerms: {
            name: "Популярные поисковые запросы",
            terms: [
                "Рубашка Oversize",
                "Худи карго",
                "Шорты-шорты",
                "Джинсы удлиненные",
            ],
        },
        placeholder: "Искать",
        search: "Поиск",
        close: "Закрыть",
    },
];

export type SearchTranslations = (typeof searchTranslations)[0];

export default function useSearchTranslations() {
    const currentLanguage = window.uiLanguage;
    return searchTranslations.find((translation) => translation.locale === currentLanguage) ?? null;
}
