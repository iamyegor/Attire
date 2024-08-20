import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";

interface ProductsProps {
    type: Type;
    category: Category | null;
}

export default function Products({ type, category }: ProductsProps) {
    const [searchParams] = useSearchParams();
    const queryKey = ["catalog", type.toString(), category?.name ?? "", searchParams.toString()];
    const { products, ref } = useLoadProducts(
        queryKey,
        (page) => `products?page=${page}&${searchParams.toString()}`,
    );

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
