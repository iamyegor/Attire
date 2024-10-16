import { useMemo } from "react";

const reviewsTranslations = [
    {
        locale: "en",
        loading: "Loading...",
        noReviews: "No reviews yet",
    },
    {
        locale: "ru",
        loading: "Загрузка...",
        noReviews: "Отзывов пока нет",
    },
];

export type ReviewsTranslation = (typeof reviewsTranslations)[0];

export default function useReviewsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            reviewsTranslations.find((translation) => translation.locale === currentLanguage) ??
            reviewsTranslations[0]
        );
    }, [currentLanguage]);
}
