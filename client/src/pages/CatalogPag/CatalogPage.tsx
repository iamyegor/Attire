import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import useMakeProductFavorite from "@/pages/HomePage/hooks/useMakeProductFavorite.ts";
import useUnmakeProductFavorite from "@/pages/HomePage/hooks/useUnmakeProductFavorite.ts";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/pages/CatalogPag/components/Breadcrumbs.tsx";
import CategoriesDashboard from "@/pages/CatalogPag/components/CategoryDashboard/CategoriesDashboard.tsx";
import SortByComponent from "@/pages/CatalogPag/components/SortByComponent/SortByComponent.tsx";

export default function CatalogPage() {
    const { products } = useLoadProducts("products", (page) => `products?page=${page}`);
    const { "*": path } = useParams();
    const makeProductFavorite = useMakeProductFavorite("products");
    const unmakeProductFavorite = useUnmakeProductFavorite("products");

    return (
        <div className="flex">
            <div className="px-4 space-y-4">
                {path && <Breadcrumbs path={path} />}
                {path && <CategoriesDashboard path={path} />}
            </div>
            <div className="mt-9">
                <SortByComponent />
                <div className="flex flex-wrap justify-center gap-4 p-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            makeProductFavorite={makeProductFavorite}
                            unmakeProductFavorite={unmakeProductFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
