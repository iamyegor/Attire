import { Link } from "react-router-dom";
import { Order } from "../types/Order";

function OrderCard({ order }: { order: Order }) {
    return (
        <div className="max-w-[875px] rounded-md bg-white overflow-hidden shadow-md mb-[20px]">
            <div className="p-[27px] bg-[#EEEEEE]">
                <div className="md:flex justify-between items-center">
                    <div className="text-[18px] md:text-[20px] font-medium">
                        {"Заказ от " +
                            new Date(order.creationDate).toLocaleDateString("ru-RU", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                    </div>
                    <div className="text-[16px] flex items-center">
                        оплачено:{" "}
                        <span className="ml-1 text-[20px] font-semibold">{order.cost + " ₽"}</span>
                    </div>
                </div>
                <div className="pt-[20px]">
                    <Link to="." className="text-[#1100FF]">
                        {order.id}
                    </Link>
                </div>
            </div>
            <div className="p-[27px]">
                <div className="text-[16px]">
                    Доставка курьером
                    <span className="ml-1 select-none px-[15px] py-[3px] bg-[#CECECE] rounded-md">
                        получено
                    </span>
                </div>
                <div className="mt-[20px]">
                    {"Дата доставки: " +
                        new Date(order.deliveryDate).toLocaleDateString("ru-RU", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
