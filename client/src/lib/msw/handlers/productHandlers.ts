import { http, HttpResponse } from "msw";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import product from "@/assets/product.webp";

function generateImageSrc(): string {
    return product;
}

const featuredProductsData: { [page: number]: ProductsResponse } = {
    0: {
        products: [
            {
                id: "1",
                name: "Product 1",
                imageSrc: generateImageSrc(),
                description: "Description for product 1",
                price: 29.99,
                isFavorite: false,
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
                isFavorite: false,
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
                isFavorite: false,
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
                isFavorite: false,
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
                isFavorite: false,
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
export const productHandlers = [
    http.get("*/featured-products", ({ request }) => {
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(featuredProductsData[parseInt(page)]);
    }),

    http.get("*/recommended-products", ({ request }) => {
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(featuredProductsData[parseInt(page)]);
    }),

    http.post("*/products/make-favorite", async ({ request }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { productId } = (await request.json()) as { productId: string };
        let isLiked = false;

        for (const page in featuredProductsData) {
            const products = featuredProductsData[page].products;
            const productIndex = products.findIndex((product) => product.id === productId);

            if (productIndex !== -1) {
                isLiked = true;
                products[productIndex].isFavorite = true;
                break;
            }
        }

        if (!isLiked) {
            return HttpResponse.error();
        }

        return HttpResponse.json({ success: true });
    }),

    http.post("*/products/unmake-favorite", async ({ request }) => {
        const { productId } = (await request.json()) as { productId: string };
        let isUnliked = false;

        for (const page in featuredProductsData) {
            const products = featuredProductsData[page].products;
            const productIndex = products.findIndex((product) => product.id === productId);

            if (productIndex !== -1) {
                isUnliked = true;
                products[productIndex].isFavorite = false;
                break;
            }
        }

        if (!isUnliked) {
            return HttpResponse.error();
        }

        return HttpResponse.json({ success: true });
    }),

    http.get("*/products", async ({ request }) => {
        const url = new URL(request.url);
        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        return HttpResponse.json(featuredProductsData[parseInt(page)]);
    }),
];
