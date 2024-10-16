import { useMemo } from "react";

const cartItemTranslations = [
    {
        locale: "en",
        sku: "SKU",
        size: "Size",
    },
    {
        locale: "ru",
        sku: "артикул",
        size: "размер",
    },
];

export type CartItemTranslation = (typeof cartItemTranslations)[0];

export default function useCartItemTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            cartItemTranslations.find((translation) => translation.locale === currentLanguage) ??
            cartItemTranslations[0]
        );
    }, [currentLanguage]);
}
