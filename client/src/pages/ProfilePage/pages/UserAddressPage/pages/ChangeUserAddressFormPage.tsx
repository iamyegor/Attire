import BlueBackButton from "@/assets/blue-arrow-circle-left.png";
import React, { useState } from "react";
import { CurrentAddressPage } from "../types/CurrentAddressPage";
import { Address } from "../types/Address";
import Input from "@/components/ui/Input";
import { SuccessOr } from "@/types/results/SuccessOr";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { EmptyResult } from "@/types/results/EmptyResult";
import fetchChangeAddress from "@/utils/services/profile/fetchChangeAddress.ts";

function ChangeUserAddressForm({
    initialAddress,
    setInitialAddress,
    setCurrentPage,
}: {
    initialAddress: Address;
    setInitialAddress: React.Dispatch<React.SetStateAction<Address | null>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentAddressPage>>;
}) {
    const [changedAddress, setChangedAddress] = useState<Address>(initialAddress);
    const [error, setError] = useState<string>();

    return (
        <div className="max-w-[560px]">
            <div className="flex justify-between items-center mb-[30px]">
                <h3 className="text-[24px] font-semibold">Адрес доставки</h3>
                <button
                    className="w-[30px] h-[30px] rounded-full"
                    onClick={() => setCurrentPage("readPage")}
                >
                    <img className="w-full" src={BlueBackButton} alt="Назад" />
                </button>
            </div>

            <div>
                <div className="mb-[20px]">
                    <div className="mb-[12px]">Населенный пункт</div>
                    <Input
                        value={changedAddress.city}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                city: e.target.value,
                            }))
                        }
                        placeholder="Введите населенный пункт"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили населенный пункт");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">Почтовый индекс</div>
                    <Input
                        value={changedAddress.postIndex}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                postIndex: e.target.value,
                            }))
                        }
                        placeholder="Введите почтовый индекс"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили почтовый индекс");
                            }
                            if (!/^\d{6}$/.test(e.target.value.trim())) {
                                return EmptyResult.Fail("Вы некорректно заполнили почтовый индекс");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">Улица</div>
                    <Input
                        value={changedAddress.street}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                street: e.target.value,
                            }))
                        }
                        placeholder="Введите улицу"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили улицу");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">Дом</div>
                    <Input
                        value={changedAddress.house}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                house: e.target.value,
                            }))
                        }
                        placeholder="Введите дом"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили дом");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[50px]">
                    <div className="mb-[12px]">Квартира</div>
                    <Input
                        value={changedAddress.flat}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                flat: e.target.value,
                            }))
                        }
                        placeholder="Введите квартира"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили квартиру");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="error-message mb-2">{error}</div>

                <button
                    onClick={async () => {
                        const result: SuccessOr<ErrorMessage> =
                            await fetchChangeAddress(changedAddress);

                        if (result.isFailure) {
                            setError(result.error?.value);
                            return;
                        }

                        setError("");

                        setInitialAddress(changedAddress);
                        setCurrentPage("readPage");
                    }}
                    className="blue-btn"
                >
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
}

export default ChangeUserAddressForm;
