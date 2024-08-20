import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import { generateImageSrc } from "@/lib/msw/handlers/common/generateImageSrc.ts";

export const productsData: { [page: number]: ProductsResponse } = {
    0: {
        products: [
            {
                id: "1",
                title: "Product 1",
                imagePath: generateImageSrc(),
                price: 29.99,
                liked: false,
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
                liked: false,
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
                liked: false,
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
                liked: false,
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
                liked: false,
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
