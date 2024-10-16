import { useMemo } from "react";

const reviewTranslations = [
    {
        locale: "en",
        leaveReview: "Leave a review",
        oneStar: "1 star",
        twoStars: "2 stars",
        threeStars: "3 stars",
        fourStars: "4 stars",
        fiveStars: "5 stars",
    },
    {
        locale: "ru",
        leaveReview: "Оставить отзыв",
        oneStar: "1 звезда",
        twoStars: "2 звезды",
        threeStars: "3 звезды",
        fourStars: "4 звезды",
        fiveStars: "5 звезд",
    },
];

export type ReviewTranslation = (typeof reviewTranslations)[0];

export default function useReviewTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            reviewTranslations.find((translation) => translation.locale === currentLanguage) ??
            reviewTranslations[0]
        );
    }, [currentLanguage]);
}
