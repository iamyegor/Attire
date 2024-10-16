import React from "react";
import { Address } from "../../types/Address";
import { CurrentAddressPage } from "../../types/CurrentAddressPage";
import useAddressDataTranslation from "./hooks/useAddressDataTranslation";

function AddressData({
    address,
    setCurrentPage,
}: {
    address: Address;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentAddressPage>>;
}) {
    const t = useAddressDataTranslation();

    return (
        <div className="space-y-8 w-min">
            <h3 className="text-[24px] font-semibold whitespace-nowrap">{t.deliveryAddress}</h3>

            {address?.city ? (
                <div className="text-[16px] space-y-3">
                    <div>{`${t.city}: ${address?.city}`}</div>
                    <div>{`${t.postIndex}: ${address?.postIndex}`}</div>
                    <div>{`${t.street}: ${address?.street}`}</div>
                    <div>{`${t.house} ${address?.house}`}</div>
                    <div>{`${t.flat} ${address?.flat}`}</div>
                    <button className="text-blue-500" onClick={() => setCurrentPage("changeForm")}>
                        {t.changeAddress}
                    </button>
                </div>
            ) : (
                <button
                    className="text-white bg-blue-500 w-full p-3 rounded-xl"
                    onClick={() => setCurrentPage("changeForm")}
                >
                    {t.addAddress}
                </button>
            )}
        </div>
    );
}

export default AddressData;
