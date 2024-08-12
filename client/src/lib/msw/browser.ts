import { setupWorker } from "msw/browser";
import { handlers } from "@/lib/msw/handlers/handlers.ts";

export const worker = setupWorker(...handlers);
