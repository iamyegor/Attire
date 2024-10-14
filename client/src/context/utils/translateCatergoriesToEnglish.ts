import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category";

export default function translateCatergoriesToEnglish({
    menCategoriesRu,
    womenCategoriesRu,
    newCategoriesRu,
}: {
    menCategoriesRu: Category[];
    womenCategoriesRu: Category[];
    newCategoriesRu: Category[];
}) {
    const menCategories = menCategoriesRu.map((category) => {
        switch (category.name) {
            case "Футболки":
                return { ...category, name: "T-shirts" };
            case "Шорты":
                return { ...category, name: "Shorts" };
            case "Джинсы":
                return { ...category, name: "Jeans" };
            case "Рубашки":
                return { ...category, name: "Shirts" };
            case "Толстовки и худи":
                return { ...category, name: "Sweatshirts and hoodies" };
            default:
                return category;
        }
    });

    const womenCategories = womenCategoriesRu.map((category) => {
        switch (category.name) {
            case "Футболки и топы":
                return { ...category, name: "T-shirts and tops" };
            case "Шорты":
                return { ...category, name: "Shorts" };
            case "Джинсы":
                return { ...category, name: "Jeans" };
            case "Рубашки и блузки":
                return { ...category, name: "Shirts and blouses" };
            case "Толстовки и худи":
                return { ...category, name: "Sweatshirts and hoodies" };
            default:
                return category;
        }
    });

    const newCategories = newCategoriesRu.map((category) => {
        switch (category.name) {
            case "Мужчинам":
                return { ...category, name: "Men" };
            case "Женщинам":
                return { ...category, name: "Women" };
            default:
                return category;
        }
    });

    return { menCategories, womenCategories, newCategories };
}
