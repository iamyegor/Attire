import { useMemo } from "react";

const sizeChartTranslations = [
    {
        locale: "en",
        sizeChartButton: "Size Chart",
        womenSizeChart: "Women's Size Chart",
        menSizeChart: "Men's Size Chart",
        columns: ["INT", "RU", "Chest", "Waist", "Hips", "Height (cm)"],
        dataKeys: {
            "Обхват груди": "Chest",
            "Обхват талии": "Waist",
            "Обхват бедер": "Hips",
            Рост: "Height (cm)",
        },
    },
    {
        locale: "ru",
        sizeChartButton: "Таблица размеров",
        womenSizeChart: "Женская размерная сетка",
        menSizeChart: "Мужская размерная сетка",
        columns: ["INT", "RU", "Обхват груди", "Обхват талии", "Обхват бедер", "Рост"],
        dataKeys: {
            "Обхват груди": "Обхват груди",
            "Обхват талии": "Обхват талии",
            "Обхват бедер": "Обхват бедер",
            Рост: "Рост",
        },
    },
];

export type SizeChartTranslation = (typeof sizeChartTranslations)[0];

export default function useSizeChartTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            sizeChartTranslations.find((translation) => translation.locale === currentLanguage) ??
            sizeChartTranslations[0]
        );
    }, [currentLanguage]);
}
