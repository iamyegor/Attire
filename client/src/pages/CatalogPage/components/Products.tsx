import useMakeProductFavorite from "@/pages/HomePage/hooks/useMakeProductFavorite.ts";
import useUnmakeProductFavorite from "@/pages/HomePage/hooks/useUnmakeProductFavorite.ts";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import BaseSkeleton from "@/components/ui/BaseSkeleton.tsx";

export default function Products() {
    const [searchParams] = useSearchParams();
    const queryKey = ["products", searchParams.toString()];
    const { products, isLoading, ref } = useLoadProducts(
        queryKey,
        (page) => `products?page=${page}&${searchParams.toString()}`,
    );

    const makeProductFavorite = useMakeProductFavorite(queryKey);
    const unmakeProductFavorite = useUnmakeProductFavorite(queryKey);

    function skeleton() {
        return Array.from({ length: 8 }).map((_, index) => (
            <div className="w-full flex-shrink-0 p-4">
                <BaseSkeleton
                    key={index}
                    style={{ width: "100%", aspectRatio: "10/16" }}
                ></BaseSkeleton>
            </div>
        ));
    }

    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full`}
        >
            {isLoading && skeleton()}
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    makeProductFavorite={makeProductFavorite}
                    unmakeProductFavorite={unmakeProductFavorite}
                />
            ))}
            <div ref={ref}></div>
        </div>
    );
}
