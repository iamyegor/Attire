import React, { useState } from "react";
import BlueBackButton from "@/assets/blue-arrow-circle-left.png";
import { CurrentAddressPage } from "../../types/CurrentAddressPage";
import { Address } from "../../types/Address";
import Input from "@/components/ui/Input";
import { SuccessOr } from "@/types/results/SuccessOr";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { EmptyResult } from "@/types/results/EmptyResult";
import fetchChangeAddress from "@/utils/services/profile/fetchChangeAddress";
import useAddressFormTranslation from "./hooks/useAddressFormTranslation";

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
    const t = useAddressFormTranslation();

    return (
        <div className="max-w-[560px]">
            <div className="flex justify-between items-center mb-[30px]">
                <h3 className="text-[24px] font-semibold">{t.title}</h3>
                <button
                    className="w-[30px] h-[30px] rounded-full"
                    onClick={() => setCurrentPage("readPage")}
                >
                    <img className="w-full" src={BlueBackButton} alt={t.back} />
                </button>
            </div>

            <div>
                <div className="mb-[20px]">
                    <div className="mb-[12px]">{t.city}</div>
                    <Input
                        value={changedAddress.city}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                city: e.target.value,
                            }))
                        }
                        placeholder={t.cityPlaceholder}
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail(t.errors.emptyCity);
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">{t.postIndex}</div>
                    <Input
                        value={changedAddress.postIndex}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                postIndex: e.target.value,
                            }))
                        }
                        placeholder={t.postIndexPlaceholder}
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail(t.errors.emptyPostIndex);
                            }
                            if (!/^\d{6}$/.test(e.target.value.trim())) {
                                return EmptyResult.Fail(t.errors.invalidPostIndex);
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">{t.street}</div>
                    <Input
                        value={changedAddress.street}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                street: e.target.value,
                            }))
                        }
                        placeholder={t.streetPlaceholder}
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail(t.errors.emptyStreet);
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">{t.house}</div>
                    <Input
                        value={changedAddress.house}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                house: e.target.value,
                            }))
                        }
                        placeholder={t.housePlaceholder}
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail(t.errors.emptyHouse);
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[50px]">
                    <div className="mb-[12px]">{t.flat}</div>
                    <Input
                        value={changedAddress.flat}
                        onChange={(e) =>
                            setChangedAddress((prev) => ({
                                ...prev!,
                                flat: e.target.value,
                            }))
                        }
                        placeholder={t.flatPlaceholder}
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail(t.errors.emptyFlat);
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
                    {t.saveChanges}
                </button>
            </div>
        </div>
    );
}

export default ChangeUserAddressForm;
