import { AxiosError, AxiosRequestConfig } from "axios";
import ServerErrorResponse from "@/types/networking/ServerErrorResponse.ts";
import api from "@/lib/api.ts";
import authApi from "@/lib/authApi.ts";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

export default async function interceptor(error: AxiosError<ServerErrorResponse>): Promise<any> {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    try {
        if (originalRequest._retry) {
            return Promise.reject(error);
        }
        originalRequest._retry = true;

        if (error.response?.data?.errorCode === "device.id.is.invalid") {
            await issueNewDeviceId();
        } else if (error.response?.status === 401) {
            await refreshToken();
        } else {
            return Promise.reject(error);
        }

        return api(originalRequest);
    } catch (newRequestError) {
        return Promise.reject(newRequestError);
    }
}

async function refreshToken(): Promise<any> {
    await authApi.post("refresh-access-token");
}

async function issueNewDeviceId(): Promise<any> {
    await authApi.post("issue-device-id");
}
