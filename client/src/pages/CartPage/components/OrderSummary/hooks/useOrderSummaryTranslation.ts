import { useMemo } from "react";

const orderSummaryTranslations = [
    {
        locale: "en",
        orderTotal: "Order Total",
        selectedItems: "selected items",
        discount: "discount",
        freeDelivery: "Free delivery from $0",
        moreDetails: "More details",
        freeDeliveryDetails: "For orders from $0, delivery is free",
        total: "Total",
        proceedToCheckout: "Proceed to Checkout",
        checkoutUnavailable: "Checkout is temporarily unavailable",
    },
    {
        locale: "ru",
        orderTotal: "Сумма заказа",
        selectedItems: "выбранные товары",
        discount: "скидка",
        freeDelivery: "Доставка бесплатно от 0 ₽",
        moreDetails: "Подробнее",
        freeDeliveryDetails: "При заказе от 0₽ доставка осуществляется бесплатно",
        total: "Итого",
        proceedToCheckout: "Перейти к оформлению",
        checkoutUnavailable: "Оформление заказа временно недоступно",
    },
];

export type OrderSummaryTranslation = (typeof orderSummaryTranslations)[0];

export default function useOrderSummaryTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            orderSummaryTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? orderSummaryTranslations[0]
        );
    }, [currentLanguage]);
}
