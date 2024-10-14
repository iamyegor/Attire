import SearchSvg from "@/assets/search.svg?react";
import LoginModal from "@/components/LoginModal/LoginModal";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton.tsx";
import SortByComponent from "@/pages/CatalogPage/components/SortByComponent/SortByComponent.tsx";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard/ProductCard";
import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import useLoadSearchProducts from "@/pages/SearchPage/hooks/useLoadSearchProducts.ts";
import useValidatedSearchTerm from "@/pages/SearchPage/hooks/useValidatedSearchTerm.ts";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearchPageTranslation from "./hooks/useSearchPageTranslation";

export default function SearchPage() {
    const searchTerm = useValidatedSearchTerm();
    const [searchParams] = useSearchParams();
    const queryKey = ["search-products", searchParams.toString()];
    const { products, isLoading, ref } = useLoadSearchProducts(queryKey);
    const [isLoginModalShown, setIsLoginModalShown] = useState(false);
    const t = useSearchPageTranslation();
    const likeProductMutate = useLikeProduct(queryKey, () => setIsLoginModalShown(true));
    const unlikeProductMutate = useUnlikeProduct(queryKey, () => setIsLoginModalShown(true));

    return (
        <div className="h-full flex flex-col mb-10 container">
            <LoginModal
                isLoginModalShown={isLoginModalShown}
                hideLoginModal={() => setIsLoginModalShown(false)}
                type="like"
            />
            <div className="mx-4 space-y-3">
                <div className="space-y-1">
                    <p>{t.searchResultsFor}</p>
                    <p className="text-3xl font-medium w-full break-words line-clamp-3">
                        {searchTerm}
                    </p>
                </div>
                <SortByComponent />
            </div>
            {!isLoading && products.length == 0 && (
                <div className="flex flex-col justify-center items-center flex-1 space-y-4">
                    <SearchSvg className="w-10 h-10" />
                    <p className="text-center text-xl sm:text-2xl">{t.noResults}</p>
                </div>
            )}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full">
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
