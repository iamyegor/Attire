import { Link } from "react-router-dom";
import { useLoadAddress } from "./hooks/useLoadAddress";

function UserAddressPage() {
    const { address, isPending } = useLoadAddress();

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full">
            <h3 className="text-[24px] font-semibold mb-[30px]">Адрес доставки</h3>
            {isPending ? (
                <>Загрузка данных...</>
            ) : (
                <div className="text-[16px]">
                    <div className="pb-[16px]">{"Населенный пункт: " + address?.city}</div>
                    <div className="pb-[16px]">{"Почтовый индекс: " + address?.postIndex}</div>
                    <div className="pb-[16px]">{"Улица: " + address?.street}</div>
                    <div className="pb-[16px]">{"Дом " + address?.house}</div>
                    <div className="pb-[32px]">{"Квартира " + address?.flat}</div>
                    <Link className="text-[#1877F2]" to="changeForm">
                        Изменить адрес доставки
                    </Link>
                </div>
            )}
        </div>
    );
}

export default UserAddressPage;
