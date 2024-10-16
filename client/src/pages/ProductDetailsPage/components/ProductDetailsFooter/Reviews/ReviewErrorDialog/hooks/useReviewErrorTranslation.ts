import { useMemo } from "react";

const reviewErrorTranslations = [
    {
        locale: "en",
        title: "Leave a Review",
        message: "To leave a review, please purchase this item first.",
    },
    {
        locale: "ru",
        title: "Оставить отзыв",
        message: "Чтобы оставить отзыв, пожалуйста, сначала приобретите этот товар.",
    },
];

export type ReviewErrorTranslation = (typeof reviewErrorTranslations)[0];

export default function useReviewErrorTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            reviewErrorTranslations.find((translation) => translation.locale === currentLanguage) ??
            reviewErrorTranslations[0]
        );
    }, [currentLanguage]);
}
