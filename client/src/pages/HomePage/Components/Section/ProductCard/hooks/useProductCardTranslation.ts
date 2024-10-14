import { useMemo } from "react";

const productCardTranslations = [
    {
        locale: "en",
        currency: {
            symbol: "$",
            code: "USD",
            exchangeRate: 1 / 95, // 1 USD = 95 RUB
        },
    },
    {
        locale: "ru",
        currency: {
            symbol: "₽",
            code: "RUB",
            exchangeRate: 1,
        },
    },
];

export type ProductCardTranslation = (typeof productCardTranslations)[0];

export default function useProductCardTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            productCardTranslations.find((translation) => translation.locale === currentLanguage) ??
            productCardTranslations[0]
        );
    }, [currentLanguage]);
}
