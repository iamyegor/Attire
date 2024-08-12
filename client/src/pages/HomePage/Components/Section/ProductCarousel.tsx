import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Product from "@/types/Product.ts";
import Slider from "react-slick";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface ProductCarouselProps {
    products: Product[];
    makeProductFavorite: (productId: string) => void;
    unmakeProductFavorite: (productId: string) => void;
    type: Type | null;
}

export default function ProductCarousel({
    products,
    makeProductFavorite,
    unmakeProductFavorite,
    type,
}: ProductCarouselProps) {
    return (
        <Slider>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    likeProduct={makeProductFavorite}
                    unlikeProduct={unmakeProductFavorite}
                    type={type}
                />
            ))}
        </Slider>
    );
}
