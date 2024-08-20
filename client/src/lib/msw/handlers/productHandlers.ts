import { http, HttpResponse } from "msw";
import { productsData } from "@/lib/msw/handlers/common/productsData.ts";

export const productHandlers = [
    http.get("*/featured-products", ({ request }) => {
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(productsData[parseInt(page)]);
    }),

    http.get("*/recommended-products", ({ request }) => {
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(productsData[parseInt(page)]);
    }),

    http.post("*/products/make-favorite", async ({ request }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { productId } = (await request.json()) as { productId: string };
        let isLiked = false;

        for (const page in productsData) {
            const products = productsData[page].products;
            const productIndex = products.findIndex((product) => product.id === productId);

            if (productIndex !== -1) {
                isLiked = true;
                products[productIndex].liked = true;
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

        for (const page in productsData) {
            const products = productsData[page].products;
            const productIndex = products.findIndex((product) => product.id === productId);

            if (productIndex !== -1) {
                isUnliked = true;
                products[productIndex].liked = false;
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
        return HttpResponse.json(productsData[parseInt(page)]);
    }),
];
