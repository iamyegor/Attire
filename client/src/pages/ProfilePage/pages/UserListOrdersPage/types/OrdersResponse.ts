import { Order } from "./Order";

export interface OrdersResponse {
    orders: Order[];
    nextPageNumber: number | null;
}
