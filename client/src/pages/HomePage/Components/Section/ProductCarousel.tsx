import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Product from "@/types/Product.ts";
import Slider from "react-slick";

interface ProductCarouselProps {
    products: Product[];
    makeProductFavorite: (productId: string) => void;
    unmakeProductFavorite: (productId: string) => void;
}

export default function ProductCarousel({
    products,
    makeProductFavorite,
    unmakeProductFavorite,
}: ProductCarouselProps) {
    return (
        <Slider>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    makeProductFavorite={makeProductFavorite}
                    unmakeProductFavorite={unmakeProductFavorite}
                />
            ))}
        </Slider>
    );
}
