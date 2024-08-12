import { http, HttpResponse } from "msw";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import { generateImageSrc } from "@/lib/msw/handlers/common/generateImageSrc.ts";

export const favoriteProducts: { [page: number]: ProductsResponse } = {
    0: {
        products: [
            {
                id: "1",
                name: "Product 1",
                imageSrc: generateImageSrc(),
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                price: 29.99,
                isFavorite: true,
            },
            {
                id: "2",
                name: "Product 2",
                imageSrc: generateImageSrc(),
                description: "Description for product 2",
                price: 19.99,
                isFavorite: true,
            },
        ],
        nextPage: 1,
    },
    1: {
        products: [
            {
                id: "3",
                name: "Product 3",
                imageSrc: generateImageSrc(),
                description: "Description for product 3",
                price: 49.99,
                isFavorite: true,
            },
            {
                id: "4",
                name: "Product 4",
                imageSrc: generateImageSrc(),
                description: "Description for product 4",
                price: 39.99,
                isFavorite: true,
            },
        ],
        nextPage: 2,
    },
    2: {
        products: [
            {
                id: "5",
                name: "Product 5",
                imageSrc: generateImageSrc(),
                description: "Description for product 5",
                price: 24.99,
                isFavorite: true,
            },
            {
                id: "6",
                name: "Product 6",
                imageSrc: generateImageSrc(),
                description: "Description for product 6",
                price: 54.99,
                isFavorite: true,
            },
        ],
        nextPage: 3,
    },
    3: {
        products: [
            {
                id: "7",
                name: "Product 7",
                imageSrc: generateImageSrc(),
                description: "Description for product 7",
                price: 64.99,
                isFavorite: true,
            },
            {
                id: "8",
                name: "Product 8",
                imageSrc: generateImageSrc(),
                description: "Description for product 8",
                price: 34.99,
                isFavorite: true,
            },
        ],
        nextPage: 4,
    },
    4: {
        products: [
            {
                id: "9",
                name: "Product 9",
                imageSrc: generateImageSrc(),
                description: "Description for product 9",
                price: 74.99,
                isFavorite: true,
            },
            {
                id: "10",
                name: "Product 10",
                imageSrc: generateImageSrc(),
                description: "Description for product 10",
                price: 44.99,
                isFavorite: true,
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
