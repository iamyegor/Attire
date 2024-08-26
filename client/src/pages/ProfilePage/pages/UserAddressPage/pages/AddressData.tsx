import React from "react";
import { Address } from "../types/Address";
import { CurrentAddressPage } from "../types/CurrentAddressPage";

function AddressData({
    address,
    setCurrentPage,
}: {
    address: Address;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentAddressPage>>;
}) {
    return (
        <div className="space-y-8 w-min">
            <h3 className="text-[24px] font-semibold whitespace-nowrap">Адрес доставки</h3>

            {address?.city ? (
                <div className="text-[16px] space-y-3">
                    <div>{"Населенный пункт: " + address?.city}</div>
                    <div>{"Почтовый индекс: " + address?.postIndex}</div>
                    <div>{"Улица: " + address?.street}</div>
                    <div>{"Дом " + address?.house}</div>
                    <div>{"Квартира " + address?.flat}</div>
                    <button className="text-blue-500" onClick={() => setCurrentPage("changeForm")}>
                        Изменить адрес доставки
                    </button>
                </div>
            ) : (
                <button
                    className="text-white bg-blue-500 w-full p-3 rounded-xl"
                    onClick={() => setCurrentPage("changeForm")}
                >
                    Добавить адрес
                </button>
            )}
        </div>
    );
}

export default AddressData;
