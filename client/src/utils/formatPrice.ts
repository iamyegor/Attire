export default function formatPrice(priceInRubles: number) {
    const uiLanguage = window.uiLanguage;

    const exchangeRate = uiLanguage === "en" ? 1 / 95 : 1;
    const symbol = uiLanguage === "en" ? "$" : "₽";

    const convertedPrice = Math.round(priceInRubles * exchangeRate);
    if (uiLanguage === "en") {
        return `${symbol}${convertedPrice}`;
    } else {
        return `${convertedPrice} ${symbol}`;
    }
}
