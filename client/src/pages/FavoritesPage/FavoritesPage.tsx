import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import { useFavorites } from "@/pages/FavoritesPage/hooks/useFavorites.tsx";
import { useRemoveFromFavorites } from "@/pages/FavoritesPage/hooks/useRemoveFromFavorites.tsx";
import BaseSkeleton from "@/components/ui/BaseSkeleton.tsx";

export default function FavoritesPage() {
    const queryKey = ["favorites"];
    const { removeFromFavorites } = useRemoveFromFavorites(queryKey);
    const { products, ref } = useFavorites(queryKey);

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
                    : skeleton()}
                <div ref={ref}></div>
            </div>
        </div>
    );
}
