import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import LoginModal from "@/components/ui/LoginModal.tsx";
import EmptySvg from "@/assets/empty.svg?react";

interface ProductsCatalogProps {
    type: Type | null;
    category: Category | null;
}

export default function ProductsCatalog({ type, category }: ProductsCatalogProps) {
    const [searchParams] = useSearchParams();
    const queryKey = [getFullProductPath(0)];
    const { products, isLoading, ref } = useLoadProducts(queryKey, (page) =>
        getFullProductPath(page),
    );
    const [isLoginModalShown, setIsLoginModalShown] = useState(false);

    function getFullProductPath(page: number) {
        const basePath = getProductsPath();
        const searchParamsString = searchParams.toString();

        const separator = basePath.includes("?") ? "&" : "?";

        let fullPath = `${basePath}${separator}page=${page}`;

        if (searchParamsString) {
            fullPath += `&${searchParamsString}`;
        }

        return fullPath;
    }

    function getProductsPath() {
        if (category) {
            if (type == Type.New && category.name == "Мужчинам") {
                return `products/new?gender=male`;
            } else if (type == Type.New && category.name == "Женщинам") {
                return `products/new?gender=female`;
            }

            return `categories/${category.id}/products`;
        } else if (type == Type.Men) {
            return `products/genders/male`;
        } else if (type == Type.Women) {
            return `products/genders/female`;
        } else if (type == Type.New) {
            return `products/new`;
        } else {
            return "";
        }
    }

    const likeProduct = useLikeProduct(queryKey, () => setIsLoginModalShown(true));
    const unlikeProduct = useUnlikeProduct(queryKey, () => setIsLoginModalShown(true));

    return (
        <div className="w-full h-full">
            <LoginModal
                isLoginModalShown={isLoginModalShown}
                hideLoginModal={() => setIsLoginModalShown(false)}
                type="like"
            />
            {!isLoading && products.length === 0 && (
                <div className="flex flex-col w-full h-full justify-center items-center text-2xl space-y-4">
                    <EmptySvg className="w-10 h-10" />
                    <p className="">В этой категории нет товаров</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
                {isLoading &&
                    Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            likeProduct={likeProduct}
                            unlikeProduct={unlikeProduct}
                            type={type}
                            category={category}
                        />
                    ))}
            </div>
            <div ref={ref}></div>
        </div>
    );
}
