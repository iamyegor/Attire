import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import { useSearchParams } from "react-router-dom";

interface ProductsProps {
    type: Type | null;
    category: Category | null;
}

export default function Products({ type, category }: ProductsProps) {
    const [searchParams] = useSearchParams();
    const queryKey = [getFullProductPath(0)];
    const { products, ref } = useLoadProducts(queryKey, (page) => getFullProductPath(page));

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

    const likeProduct = useLikeProduct(queryKey);
    const unlikeProduct = useUnlikeProduct(queryKey);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
            {products.length > 0
                ? products.map((product) => (
                      <ProductCard
                          key={product.id}
                          product={product}
                          likeProduct={likeProduct}
                          unlikeProduct={unlikeProduct}
                          type={type}
                          category={category}
                      />
                  ))
                : Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)}
            <div ref={ref}></div>
        </div>
    );
}
