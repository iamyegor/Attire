import { useMemo } from "react";
import SortBy from "@/pages/CatalogPage/components/SortByComponent/types/SortyBy.ts";

const sortByComponentTranslations = [
    {
        locale: "en",
        popular: "Popular",
        new: "New",
        cheaper: "Cheaper",
        moreExpensive: "More Expensive",
        getSortingValue: (sorting: SortBy) => {
            switch (sorting) {
                case SortBy.Popular:
                    return "Popular";
                case SortBy.New:
                    return "New";
                case SortBy.Cheaper:
                    return "Cheaper";
                case SortBy.MoreExpensive:
                    return "More Expensive";
                default:
                    return "Popular";
            }
        },
    },
    {
        locale: "ru",
        popular: "Популярные",
        new: "Новинки",
        cheaper: "Дешевле",
        moreExpensive: "Дороже",
        getSortingValue: (sorting: SortBy) => {
            switch (sorting) {
                case SortBy.Popular:
                    return "Популярные";
                case SortBy.New:
                    return "Новинки";
                case SortBy.Cheaper:
                    return "Дешевле";
                case SortBy.MoreExpensive:
                    return "Дороже";
                default:
                    return "Популярные";
            }
        },
    },
];

export type SortByComponentTranslation = (typeof sortByComponentTranslations)[0];

export default function useSortByComponentTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            sortByComponentTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? sortByComponentTranslations[0]
        );
    }, [currentLanguage]);
}
