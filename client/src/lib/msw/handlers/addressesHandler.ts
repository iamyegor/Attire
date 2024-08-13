import { Address } from "@/pages/ProfilePage/pages/UserAddressPage/types/Address";
import { http, HttpResponse } from "msw";

const userAddress: Address = {
    city: "Москва",
    postIndex: "123456",
    street: "Криворожская ул.",
    house: "д. 12",
    flat: "кв. 12",
};

export const addressesHandlers = [
    http.get("*/users/address", async ({ request }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const url = new URL(request.url);

        return HttpResponse.json(userAddress);
    }),
];
