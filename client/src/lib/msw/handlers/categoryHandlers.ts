import { http, HttpResponse } from "msw";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";

const maleCategories: Category[] = [
    {
        id: "b7f91c5a-11de-4f97-8743-60c08cbf5eae",
        name: "Куртки и пальто",
    },
    { id: "9e7cd42e-2f99-4d73-b85d-c89b89b8dc4f", name: "Рубашки" },
    { id: "23c93f0e-3692-4723-b3dc-f1a9f20c0a71", name: "Брюки" },
    { id: "bbce5ad4-bf2b-4077-b31f-77f3c632b9a3", name: "Обувь" },
];

const femaleCategories: Category[] = [
    { id: "64e2f84d-8335-4cfa-8726-7c1b048cfc39", name: "Платья" },
    { id: "3ec3779d-f51c-4b3e-a042-e88839f9ef0e", name: "Юбки" },
    { id: "98a8f9f2-9ff7-4a9a-bb14-ead5e9d6abef", name: "Сумки" },
    { id: "4255ea6f-4620-4d28-957b-d1c4d6e2c685", name: "Обувь" },
];

export const categoryHandlers = [
    http.get("*/categories/male", async () => {
        return HttpResponse.json(maleCategories);
    }),
    http.get("*/categories/female", async () => {
        return HttpResponse.json(femaleCategories);
    }),
];
