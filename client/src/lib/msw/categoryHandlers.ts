import { http, HttpResponse } from "msw";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";

const maleCategories: Category[] = [
    { name: "Куртки и пальто", path: "men/jackets-coats" },
    { name: "Рубашки", path: "men/shirts" },
    { name: "Брюки", path: "men/pants" },
    { name: "Обувь", path: "men/shoes" },
];

const femaleCategories: Category[] = [
    { name: "Платья", path: "women/dresses" },
    { name: "Юбки", path: "women/skirts" },
    { name: "Сумки", path: "women/bags" },
    { name: "Обувь", path: "women/shoes" },
];

export const categoryHandlers = [
    http.get("*/categories/male", async () => {
        return HttpResponse.json(maleCategories);
    }),
    http.get("*/categories/female", async () => {
        return HttpResponse.json(femaleCategories);
    }),
];
