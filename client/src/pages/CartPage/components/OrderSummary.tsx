import TruckSvg from "@/assets/truck.svg?react";
import { useState } from "react";
import CustomDialog from "@/components/ui/CustomDialog.tsx";
import classNames from "classnames";
import RedFaceSvg from "@/assets/red-face.svg?react";

interface OrderSummaryProps {
    selectedItems: number;
    totalPrice: number;
}

export default function OrderSummary({ selectedItems, totalPrice }: OrderSummaryProps) {
    const [purchaseFailedDialogOpen, setPurchaseFailedDialogOpen] = useState(false);
    const [deliveryDetailsOpen, setDeliveryDetailsOpen] = useState(false);

    return (
        <div className="w-full lg:max-w-[420px] h-min mx-auto bg-neutral-200 rounded-[1.75rem] sm:rounded-2xl overflow-hidden p-4 md:p-6 space-y-4">
            <h2 className="font-semibold text-black text-xl tracking-normal">Сумма заказа</h2>

            <div className="grid grid-cols-2 gap-2 text-base text-black">
                <span className="font-normal">выбранные товары ({selectedItems})</span>
                <span className="justify-self-end font-semibold">{totalPrice} ₽</span>

                <span className="font-normal">скидка</span>
                <span className="justify-self-end font-semibold">0 ₽</span>
            </div>

            <div className="w-full h-[1px] bg-neutral-400" />

            <div className="flex items-center text-base text-black space-x-3">
                <TruckSvg className="w-5 h-5" />
                <span>Доставка бесплатно от 0 ₽</span>
            </div>

            <button
                className="text-blue-500 text-base font-normal cursor-pointer"
                onClick={() => setDeliveryDetailsOpen(true)}
            >
                Подробнее
            </button>
            <CustomDialog
                isOpen={deliveryDetailsOpen}
                onClose={() => setDeliveryDetailsOpen(false)}
            >
                <p>При заказе от 0₽ доставка осуществляется бесплатно</p>
            </CustomDialog>

            <div className="w-full h-[1px] bg-neutral-400" />

            <div className="flex justify-between text-xl font-medium text-black">
                <span>Итого</span>
                <span>{totalPrice} ₽</span>
            </div>

            <button
                className={classNames("w-full p-4 rounded-lg flex justify-center items-center", {
                    "bg-gray-500": selectedItems == 0,
                    "bg-blue-500": selectedItems > 0,
                })}
                disabled={selectedItems == 0}
                onClick={() => setPurchaseFailedDialogOpen(true)}
            >
                <span className="font-normal text-white text-base">Перейти к оформлению</span>
            </button>
            <CustomDialog
                isOpen={purchaseFailedDialogOpen}
                onClose={() => setPurchaseFailedDialogOpen(false)}
            >
                <div className="px-6 flex flex-col items-center space-y-4">
                    <RedFaceSvg className="w-20 h-20" />
                    <p className="text-xl font-medium text-center">
                        Что-то пошло не так при попытке совершить покупку, пожалуйста попробуйте
                        позже.
                    </p>
                </div>
            </CustomDialog>
        </div>
    );
}
