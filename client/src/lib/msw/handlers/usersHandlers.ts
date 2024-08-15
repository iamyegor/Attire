import { http, HttpResponse } from "msw";

export const usersHandlers = [
    http.post("*/users/logout", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return HttpResponse.json();
    }),

    http.put("*/users/password", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return HttpResponse.json();
    }),
];
