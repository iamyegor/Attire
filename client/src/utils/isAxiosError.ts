import { AxiosError } from "axios";

export default function isAxiosError(e: any) {
    return e instanceof AxiosError;
}
