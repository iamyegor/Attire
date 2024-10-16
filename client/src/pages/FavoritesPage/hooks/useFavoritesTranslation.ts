import { useMemo } from "react";

const favoritesTranslations = [
    {
        locale: "en",
        emptyFavorites: "No favorites yet",
        errorLoading: "An error occurred while loading favorite products",
    },
    {
        locale: "ru",
        emptyFavorites: "В избранном пока ничего нет",
        errorLoading: "Произошла ошибка при загрузке избранных товаров",
    },
];

export type FavoritesTranslation = (typeof favoritesTranslations)[0];

export default function useFavoritesTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            favoritesTranslations.find((translation) => translation.locale === currentLanguage) ??
            favoritesTranslations[0]
        );
    }, [currentLanguage]);
}
