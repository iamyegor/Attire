import { PersonalData } from "@/pages/ProfilePage/pages/UserPersonalDataPage/types/PersonalData";
import { http, HttpResponse } from "msw";

const userPersonalData: PersonalData = {
    firstName: "Денис",
    lastName: "Игнатенко",
    email: "den@gmail.com",
};

export const userPersonalDataHandlers = [
    http.get("*/users/personalData", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return HttpResponse.json(userPersonalData);
    }),

    http.put("*/users/personalData", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return HttpResponse.json();
    }),
];
