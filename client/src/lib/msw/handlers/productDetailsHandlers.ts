import { http, HttpResponse } from "msw";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import ProductImage from "@/assets/product.webp";

export const productDetails: ProductDetails = {
    id: "1",
    name: "Pants",
    price: 100,
    description: "Beautiful pants",
    images: [ProductImage, ProductImage, ProductImage],
    colors: [
        {
            name: "Red",
            hex: "#ff0000",
        },
        {
            name: "Green",
            hex: "#00ff00",
        },
    ],
    sizes: ["S", "M", "L"],
    quantityInCart: 0,
    isLiked: false,
    composition: "Cotton 100%",
    category: "Pants",
    brand: "Gucci",
    sku: "HUY-12345",
};

export const productDetailsHandlers = [
    http.get("*/product-details/*", () => {
        return HttpResponse.json(productDetails);
    }),
    http.post("*/products/*/decrease-cart-quantity", () => {
        productDetails.quantityInCart -= 1;
        return HttpResponse.json(productDetails);
    }),
    http.post("*/products/*/increase-cart-quantity", async () => {
        productDetails.quantityInCart += 1;
        return HttpResponse.json(productDetails);
    }),
];
