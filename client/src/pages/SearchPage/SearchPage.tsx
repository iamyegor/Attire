import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import useLoadSearchProducts from "@/pages/SearchPage/hooks/useLoadSearchProducts.ts";
import SortByComponent from "@/pages/CatalogPage/components/SortByComponent/SortByComponent.tsx";
import { useSearchParams } from "react-router-dom";
import useValidatedSearchTerm from "@/pages/SearchPage/hooks/useValidatedSearchTerm.ts";

export default function SearchPage() {
    const searchTerm = useValidatedSearchTerm();
    const [searchParams] = useSearchParams();
    const queryKey = ["search-products", searchParams.toString()];
    const { products, ref } = useLoadSearchProducts(queryKey);
    const likeProductMutate = useLikeProduct(queryKey);
    const unlikeProductMutate = useUnlikeProduct(queryKey);

    return (
        <div>
            <div className="ml-4 space-y-3">
                <div className="space-y-1">
                    <p>Результаты поиска для</p>
                    <p className="text-3xl font-medium">{searchTerm}</p>
                </div>
                <SortByComponent />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center w-full">
                {products.length > 0
                    ? products.map((product) => (
                          <ProductCard
                              key={product.id}
                              product={product}
                              likeProduct={likeProductMutate}
                              unlikeProduct={unlikeProductMutate}
                          />
                      ))
                    : Array.from({ length: 8 }).map((_, index) => (
                          <div key={index}>
                              <ProductCardSkeleton key={index} />
                          </div>
                      ))}
                <div ref={ref}></div>
            </div>
        </div>
    );
}
