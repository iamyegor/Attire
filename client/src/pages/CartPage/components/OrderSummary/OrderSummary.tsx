import TruckSvg from "@/assets/truck.svg?react";
import CustomDialog from "@/components/CustomDialog/CustomDialog";
import classNames from "classnames";
import { useState } from "react";
import { TbHandStop } from "react-icons/tb";
import useOrderSummaryTranslation from "./hooks/useOrderSummaryTranslation";
import formatPrice from "@/utils/formatPrice";

interface OrderSummaryProps {
    selectedItems: number;
    totalPrice: number;
}

export default function OrderSummary({ selectedItems, totalPrice }: OrderSummaryProps) {
    const [purchaseFailedDialogOpen, setPurchaseFailedDialogOpen] = useState(false);
    const [deliveryDetailsOpen, setDeliveryDetailsOpen] = useState(false);
    const t = useOrderSummaryTranslation();

    return (
        <div className="w-full lg:max-w-[420px] h-min mx-auto bg-neutral-200 rounded-[1.75rem] sm:rounded-2xl overflow-hidden p-4 md:p-6 space-y-4">
            <h2 className="font-semibold text-black text-xl tracking-normal">{t.orderTotal}</h2>

            <div className="grid grid-cols-2 gap-2 text-base text-black">
                <span className="font-normal">
                    {t.selectedItems} ({selectedItems})
                </span>
                <span className="justify-self-end font-semibold">{formatPrice(totalPrice)}</span>

                <span className="font-normal">{t.discount}</span>
                <span className="justify-self-end font-semibold">{formatPrice(0)}</span>
            </div>

            <div className="w-full h-[1px] bg-neutral-400" />

            <div className="flex items-center text-base text-black space-x-3">
                <TruckSvg className="w-5 h-5" />
                <span>{t.freeDelivery}</span>
            </div>

            <button
                className="text-blue-500 text-base font-normal cursor-pointer"
                onClick={() => setDeliveryDetailsOpen(true)}
            >
                {t.moreDetails}
            </button>
            <CustomDialog
                isOpen={deliveryDetailsOpen}
                onClose={() => setDeliveryDetailsOpen(false)}
            >
                <p>{t.freeDeliveryDetails}</p>
            </CustomDialog>

            <div className="w-full h-[1px] bg-neutral-400" />

            <div className="flex justify-between text-xl font-medium text-black">
                <span>{t.total}</span>
                <span>{formatPrice(totalPrice)}</span>
            </div>

            <button
                className={classNames("w-full p-4 rounded-lg flex justify-center items-center", {
                    "bg-gray-500": selectedItems == 0,
                    "bg-blue-500": selectedItems > 0,
                })}
                disabled={selectedItems == 0}
                onClick={() => setPurchaseFailedDialogOpen(true)}
            >
                <span className="font-normal text-white text-base">{t.proceedToCheckout}</span>
            </button>
            <CustomDialog
                isOpen={purchaseFailedDialogOpen}
                onClose={() => setPurchaseFailedDialogOpen(false)}
            >
                <div className="px-6 flex flex-col items-center space-y-4">
                    <TbHandStop className="w-20 h-20 text-red-500" />
                    <p className="text-xl font-medium text-center">{t.checkoutUnavailable}</p>
                </div>
            </CustomDialog>
        </div>
    );
}
