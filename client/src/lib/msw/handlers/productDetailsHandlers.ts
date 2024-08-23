import { http, HttpResponse } from "msw";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import ProductImage from "@/assets/product.webp";

export const productDetails: ProductDetails = {
    id: "1",
    title: "Pants",
    price: 100,
    description: "Beautiful pants",
    imagePaths: [ProductImage, ProductImage, ProductImage],
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
    cartItemsInfo: [{ cartItemId: "1", size: "S", color: "Red", quantityInCart: 1 }],
    liked: false,
    composition: "Cotton 100%",
    categoryName: "Pants",
    brand: "Gucci",
    sku: "HUY-12345",
};

export const productDetailsHandlers = [
    http.get("*/product-details/*", () => {
        return HttpResponse.json(productDetails);
    }),
    http.post("*/products/:cartItemId/decrease-cart-quantity", ({ params }) => {
        const { cartItemId } = params;

        const cartItem = productDetails.cartItemsInfo.find((x) => x.cartItemId === cartItemId);
        if (!cartItem) {
            return HttpResponse.error();
        }

        cartItem.quantityInCart = Math.max(cartItem.quantityInCart - 1, 0);

        return HttpResponse.json();
    }),
    http.post("*/products/:cartItemId/increase-cart-quantity", async ({ params }) => {
        const { cartItemId } = params;

        const cartItem = productDetails.cartItemsInfo.find((x) => x.cartItemId === cartItemId);
        if (!cartItem) {
            return HttpResponse.error();
        }

        cartItem.quantityInCart = Math.max(cartItem.quantityInCart + 1, 0);

        return HttpResponse.json();
    }),
];
