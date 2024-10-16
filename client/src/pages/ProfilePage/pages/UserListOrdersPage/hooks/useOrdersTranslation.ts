import { useMemo } from "react";

const ordersTranslations = [
    {
        locale: "en",
        orderHistory: "Order History",
    },
    {
        locale: "ru",
        orderHistory: "История заказов",
    },
];

export type OrdersTranslation = (typeof ordersTranslations)[0];

export default function useOrdersTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            ordersTranslations.find((translation) => translation.locale === currentLanguage) ??
            ordersTranslations[0]
        );
    }, [currentLanguage]);
}
