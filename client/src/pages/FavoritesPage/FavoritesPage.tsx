import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import { useFavorites } from "@/pages/FavoritesPage/hooks/useFavorites.tsx";
import { useRemoveFromFavorites } from "@/pages/FavoritesPage/hooks/useRemoveFromFavorites.tsx";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";

export default function FavoritesPage() {
    const queryKey = ["favorites"];
    const { removeFromFavorites } = useRemoveFromFavorites(queryKey);
    const { products, ref } = useFavorites(queryKey);

    return (
        <div className="w-full sm:container mx-auto pb-10 p-2">
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0
                    ? products.map((product) => (
                          <ProductCard
                              product={product}
                              likeProduct={() => {}}
                              unlikeProduct={removeFromFavorites}
                          />
                      ))
                    : Array.from({ length: 8 }).map((_, index) => (
                          <ProductCardSkeleton key={index} />
                      ))}
                <div ref={ref}></div>
            </div>
        </div>
    );
}
