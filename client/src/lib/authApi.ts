import axios, { AxiosResponse } from "axios";
import interceptor from "@/lib/interceptor.ts";

const authApi = axios.create({
    baseURL: "https://" + import.meta.env.VITE_AUTH_BACKEND_ADDRESS,
    withCredentials: true,
});

authApi.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    return response;
}, interceptor);

export default authApi;
