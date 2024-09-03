// src/mocks/handlers.js
import { categoryHandlers } from "@/lib/msw/handlers/categoryHandlers.ts";
import { filterHandlers } from "@/lib/msw/handlers/filterHandlers.ts";
import { productHandlers } from "@/lib/msw/handlers/productHandlers.ts";
import { productDetailsHandlers } from "@/lib/msw/handlers/productDetailsHandlers.ts";
import { reviewsHandlers } from "@/lib/msw/handlers/reviewsHandlers.ts";
import { favoritesHandlers } from "@/lib/msw/handlers/favoritesHandlers.ts";
import { ordersHandlers } from "./ordersHandlers";
import { addressesHandlers } from "./addressesHandler";
import { userPersonalDataHandlers } from "./userPersonalDataHandlers";
import { usersHandlers } from "./usersHandlers";
// import { cartHandlers } from "@/lib/msw/handlers/cartHandlers.ts";

export const handlers = [
    ...categoryHandlers,
    ...filterHandlers,
    ...productHandlers,
    ...productDetailsHandlers,
    ...reviewsHandlers,
    ...favoritesHandlers,
    ...ordersHandlers,
    ...addressesHandlers,
    ...userPersonalDataHandlers,
    ...usersHandlers,
    // ...cartHandlers,
];
