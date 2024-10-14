import { useMemo } from "react";

const priceRangeSliderTranslations = [
    {
        locale: "en",
        priceRange: "Price Range",
        ariaLabel: "Price range",
        currency: {
            symbol: "$",
            code: "USD",
            exchangeRate: 1 / 95,
        },
    },
    {
        locale: "ru",
        priceRange: "Диапазон цены",
        ariaLabel: "Диапазон цены",
        currency: {
            symbol: "₽",
            code: "RUB",
            exchangeRate: 1,
        },
    },
];

export type PriceRangeSliderTranslation = (typeof priceRangeSliderTranslations)[0];

export default function usePriceRangeSliderTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            priceRangeSliderTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? priceRangeSliderTranslations[0]
        );
    }, [currentLanguage]);
}
