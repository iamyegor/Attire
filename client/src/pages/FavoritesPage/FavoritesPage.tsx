import HeartSvg from "@/assets/heart-red.svg?react";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import { useLoadFavorites } from "@/pages/FavoritesPage/hooks/useLoadFavorites.tsx";
import { useRemoveFromFavorites } from "@/pages/FavoritesPage/hooks/useRemoveFromFavorites.tsx";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard/ProductCard";
import useFavoritesTranslation from "./hooks/useFavoritesTranslation";

export default function FavoritesPage() {
    const queryKey = ["favorites"];
    const { removeFromFavorites } = useRemoveFromFavorites(queryKey);
    const { products, isLoading, isSuccess, ref } = useLoadFavorites(queryKey);
    const t = useFavoritesTranslation();

    function renderErrorState(message: string) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-3">
                <HeartSvg className="w-12 h-12" />
                <p className="text-2xl">{message}</p>
            </div>
        );
    }

    return (
        <div className="w-full sm:container mx-auto pb-10 h-full">
            {isSuccess && products.length === 0 && renderErrorState(t.emptyFavorites)}
            {!isLoading && !isSuccess && renderErrorState(t.errorLoading)}
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                likeProduct={() => {}}
                                unlikeProduct={removeFromFavorites}
                            />
                        ))}
                        <div ref={ref}></div>
                    </>
                ) : (
                    isLoading &&
                    Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
                )}
            </div>
        </div>
    );
}
