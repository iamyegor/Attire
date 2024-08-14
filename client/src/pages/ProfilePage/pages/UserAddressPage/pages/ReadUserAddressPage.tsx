import React from "react";
import { Address } from "../types/Address";
import { CurrentAddressPage } from "../types/CurrentAddressPage";

function ReadUserAddressPage({
    address,
    setCurrentPage,
}: {
    address: Address;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentAddressPage>>;
}) {
    return (
        <div>
            <h3 className="text-[24px] font-semibold mb-[30px]">Адрес доставки</h3>

            <div className="text-[16px]">
                <div className="pb-[16px]">{"Населенный пункт: " + address?.city}</div>
                <div className="pb-[16px]">{"Почтовый индекс: " + address?.postIndex}</div>
                <div className="pb-[16px]">{"Улица: " + address?.street}</div>
                <div className="pb-[16px]">{"Дом " + address?.house}</div>
                <div className="pb-[32px]">{"Квартира " + address?.flat}</div>
                <button className="text-[#1877F2]" onClick={() => setCurrentPage("changeForm")}>
                    Изменить адрес доставки
                </button>
            </div>
        </div>
    );
}

export default ReadUserAddressPage;
