import { useMemo } from "react";

const noOrdersTranslations = [
    {
        locale: "en",
        altText: "No orders",
        message: "You haven't made any orders yet.",
    },
    {
        locale: "ru",
        altText: "Нет заказов",
        message: "Вы пока не сделали ни одного заказа.",
    },
];

export type NoOrdersTranslation = (typeof noOrdersTranslations)[0];

export default function useNoOrdersTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            noOrdersTranslations.find((translation) => translation.locale === currentLanguage) ??
            noOrdersTranslations[0]
        );
    }, [currentLanguage]);
}
