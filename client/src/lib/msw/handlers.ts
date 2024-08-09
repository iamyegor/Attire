// src/mocks/handlers.js
import { categoryHandlers } from "@/lib/msw/categoryHandlers.ts";
import { filterHandlers } from "@/lib/msw/filterHandlers.ts";
import { productHandlers } from "@/lib/msw/productHandlers.ts";

export const handlers = [...categoryHandlers, ...filterHandlers, ...productHandlers];
