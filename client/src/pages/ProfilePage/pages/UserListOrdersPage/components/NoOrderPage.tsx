import NoOrdersImage from "@/assets/no-orders.png";

function NoOrderPage() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col items-center">
                <div className="w-[280px]">
                    <img className="w-full" src={NoOrdersImage} alt="Нет заказов" />
                </div>
                <div className="text-[24px] font-medium pb-[30px]">
                    Вы пока не сделали ни одного заказа.
                </div>
            </div>
        </div>
    );
}

export default NoOrderPage;
