import { OrdersResponse } from "@/pages/ProfilePage/pages/UserListOrdersPage/types/OrdersResponse";
import { http, HttpResponse } from "msw";

export const orders: { [page: number]: OrdersResponse } = {
    1: {
        orders: [
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda1",
                cost: 10000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda2",
                cost: 20000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda3",
                cost: 14000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
        ],
        nextPageNumber: 2,
    },
    2: {
        orders: [
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda4",
                cost: 12000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda5",
                cost: 121000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda6",
                cost: 11000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
        ],
        nextPageNumber: 3,
    },
    3: {
        orders: [
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda7",
                cost: 5000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda8",
                cost: 1000,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
            {
                id: "b0b95618-3427-4183-8f2f-3eb7ecd8fda9",
                cost: 100,
                creationDate: new Date(2024, 9, 9),
                deliveryDate: new Date(2024, 9, 9),
            },
        ],
        nextPageNumber: null,
    },
};

export const ordersHandlers = [
    http.get("*/orders", async ({ request }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const url = new URL(request.url);

        const page: string | null = url.searchParams.get("page");
        if (page === null) {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json(orders[parseInt(page)]);
    }),
];
