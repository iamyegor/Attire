import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import useLoadSearchProducts from "@/pages/SearchPage/hooks/useLoadSearchProducts.ts";
import SortByComponent from "@/pages/CatalogPage/components/SortByComponent/SortByComponent.tsx";
import { useSearchParams } from "react-router-dom";
import useValidatedSearchTerm from "@/pages/SearchPage/hooks/useValidatedSearchTerm.ts";
import { useState } from "react";
import LoginModal from "@/components/ui/LoginModal.tsx";
import SearchSvg from "@/assets/search.svg?react";

export default function SearchPage() {
    const searchTerm = useValidatedSearchTerm();
    const [searchParams] = useSearchParams();
    const queryKey = ["search-products", searchParams.toString()];
    const { products, isLoading, ref } = useLoadSearchProducts(queryKey);
    const [isLoginModalShown, setIsLoginModalShown] = useState(false);
    const likeProductMutate = useLikeProduct(queryKey, () => setIsLoginModalShown(true));
    const unlikeProductMutate = useUnlikeProduct(queryKey, () => setIsLoginModalShown(true));

    return (
        <div className="h-full flex flex-col mb-10">
            <LoginModal
                isLoginModalShown={isLoginModalShown}
                hideLoginModal={() => setIsLoginModalShown(false)}
                type="like"
            />
            <div className="ml-8 space-y-3">
                <div className="space-y-1">
                    <p>Результаты поиска для</p>
                    <p className="text-3xl font-medium">{searchTerm}</p>
                </div>
                <SortByComponent />
            </div>
            {!isLoading && products.length == 0 && (
                <div className="flex flex-col justify-center items-center flex-1 space-y-4">
                    <SearchSvg className="w-10 h-10" />
                    <p className="text-center text-xl sm:text-2xl">
                        Ничего не нашлось по вашему запросу
                    </p>
                </div>
            )}
            <div className="ml-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center w-full">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                          <div key={index}>
                              <ProductCardSkeleton key={index} />
                          </div>
                      ))
                    : products.length > 0 &&
                      products.map((product) => (
                          <ProductCard
                              key={product.id}
                              product={product}
                              likeProduct={likeProductMutate}
                              unlikeProduct={unlikeProductMutate}
                          />
                      ))}
                <div ref={ref}></div>
            </div>
        </div>
    );
}
