import { http, HttpResponse } from "msw";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import { generateImageSrc } from "@/lib/msw/handlers/common/generateImageSrc.ts";

export const favoriteProducts: { [page: number]: ProductsResponse } = {
    0: {
        products: [
            {
                id: "1",
                title: "Product 1",
                imagePath: generateImageSrc(),
                price: 29.99,
                liked: true,
            },
            {
                id: "2",
                title: "Product 2",
                imagePath: generateImageSrc(),
                price: 19.99,
                liked: true,
            },
        ],
        nextPage: 1,
    },
    1: {
        products: [
            {
                id: "3",
                title: "Product 3",
                imagePath: generateImageSrc(),
                price: 49.99,
                liked: true,
            },
            {
                id: "4",
                title: "Product 4",
                imagePath: generateImageSrc(),
                price: 39.99,
                liked: true,
            },
        ],
        nextPage: 2,
    },
    2: {
        products: [
            {
                id: "5",
                title: "Product 5",
                imagePath: generateImageSrc(),
                price: 24.99,
                liked: true,
            },
            {
                id: "6",
                title: "Product 6",
                imagePath: generateImageSrc(),
                price: 54.99,
                liked: true,
            },
        ],
        nextPage: 3,
    },
    3: {
        products: [
            {
                id: "7",
                title: "Product 7",
                imagePath: generateImageSrc(),
                price: 64.99,
                liked: true,
            },
            {
                id: "8",
                title: "Product 8",
                imagePath: generateImageSrc(),
                price: 34.99,
                liked: true,
            },
        ],
        nextPage: 4,
    },
    4: {
        products: [
            {
                id: "9",
                title: "Product 9",
                imagePath: generateImageSrc(),
                price: 74.99,
                liked: true,
            },
            {
                id: "10",
                title: "Product 10",
                imagePath: generateImageSrc(),
                price: 44.99,
                liked: true,
            },
        ],
        nextPage: null, // No next page
    },
};

export const favoritesHandlers = [
    http.get("*/favorites", async ({ request }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json(favoriteProducts[parseInt(page)]);
    }),
    http.delete("*/favorites/*", ({ request }) => {
        const url = new URL(request.url);
        const productId = url.pathname.split("/").pop();
        if (!productId) {
            return new HttpResponse(null, { status: 404 });
        }

        for (const page in favoriteProducts) {
            const products = favoriteProducts[page].products;
            const productIndex = products.findIndex((product) => product.id === productId);
            if (productIndex !== -1) {
                products.splice(productIndex, 1);
                return HttpResponse.json({ success: true });
            }
        }

        return HttpResponse.error();
    }),
];
