import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard/ProductCard";
import Product from "@/types/Product.ts";
import Slider from "react-slick";

interface ProductCarouselProps {
    products: Product[];
    likeProduct: (productId: string) => void;
    unlikeProduct: (productId: string) => void;
    type: Type | null;
}

export default function ProductCarousel({
    products,
    likeProduct,
    unlikeProduct,
    type,
}: ProductCarouselProps) {
    return (
        <Slider>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    likeProduct={likeProduct}
                    unlikeProduct={unlikeProduct}
                    type={type}
                />
            ))}
        </Slider>
    );
}
