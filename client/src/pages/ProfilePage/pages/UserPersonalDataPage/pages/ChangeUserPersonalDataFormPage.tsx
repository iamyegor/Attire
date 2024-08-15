import BlueBackButton from "@/assets/blue-arrow-circle-left.png";
import { useState } from "react";
import CurrentPersonalDataPage from "../types/CurrentPersonalDataPage";
import { PersonalData } from "../types/PersonalData";
import Input from "@/components/ui/Input";
import { SuccessOr } from "@/types/results/SuccessOr";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { EmptyResult } from "@/types/results/EmptyResult";
import PhoneInput from "@/components/ui/PhoneInput/components/PhoneInput";
import fetchChangePersonalData from "@/utils/services/profile/fetchChangePersonalData.ts";
import { toServerPhoneNumberDto } from "@/utils/phoneNumberConverter.ts";
// import fetchChangePersonalData from "@/utils/services/fetchChangePersonalData";

function ChangeUserPersonalDataFormPage({
    initialPersonalData,
    setInitialPersonalData,
    setCurrentPage,
}: {
    initialPersonalData: PersonalData;
    setInitialPersonalData: React.Dispatch<React.SetStateAction<PersonalData | null>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPersonalDataPage>>;
}) {
    const [changedPersonalData, setChangedPersonalData] = useState<PersonalData>({
        ...initialPersonalData,
        phone: initialPersonalData.phone.slice(2),
    });
    const [error, setError] = useState<string>();

    return (
        <div>
            <div className="flex justify-between items-center mb-[30px]">
                <h3 className="text-[24px] font-semibold">Изменение личных данных</h3>
                <button
                    className="w-[30px] h-[30px] rounded-full"
                    onClick={() => setCurrentPage("readPage")}
                >
                    <img className="w-full" src={BlueBackButton} alt="Назад" />
                </button>
            </div>

            <div>
                <div className="mb-[20px]">
                    <div className="mb-[12px]">Имя</div>
                    <Input
                        value={changedPersonalData.firstName}
                        onChange={(e) =>
                            setChangedPersonalData((prev) => ({
                                ...prev!,
                                firstName: e.target.value,
                            }))
                        }
                        placeholder="Введите имя"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили имя");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">Фамилия</div>
                    <Input
                        value={changedPersonalData.lastName}
                        onChange={(e) =>
                            setChangedPersonalData((prev) => ({
                                ...prev!,
                                lastName: e.target.value,
                            }))
                        }
                        placeholder="Введите фамилия"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили фамилия");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="mb-[20px]">
                    <div className="mb-[12px]">Телефон</div>
                    <PhoneInput
                        country={{
                            id: 1,
                            flag: "🇷🇺",
                            name: "Russia",
                            code: "RU",
                            dialCode: "+7",
                            maxDigits: 10,
                        }}
                        phoneNumber={changedPersonalData.phone}
                        setPhoneNumber={(phoneNumber) => {
                            console.log(phoneNumber);
                            console.log(
                                "+7" +
                                    phoneNumber.slice(1, 4) +
                                    phoneNumber.slice(6, 9) +
                                    phoneNumber.slice(10),
                            );

                            setChangedPersonalData((prev) => ({
                                ...prev!,
                                phone: phoneNumber,
                            }));
                        }}
                    />
                </div>

                <div className="mb-[50px]">
                    <div className="mb-[12px]">Почта</div>
                    <Input
                        value={changedPersonalData.email}
                        onChange={(e) =>
                            setChangedPersonalData((prev) => ({
                                ...prev!,
                                email: e.target.value,
                            }))
                        }
                        placeholder="Введите почту"
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не заполнили почту");
                            }
                            if (!/^[^@]+@[^@]+\.[^@]+$/.test(e.target.value.trim())) {
                                return EmptyResult.Fail("Вы некорректно заполнили почту");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div className="error-message mb-2">{error}</div>

                <button
                    onClick={async () => {
                        const changedPersonalDataDto = {
                            ...changedPersonalData,
                            phone: toServerPhoneNumberDto(changedPersonalData.phone),
                        };

                        const result: SuccessOr<ErrorMessage> =
                            await fetchChangePersonalData(changedPersonalDataDto);

                        if (result.isFailure) {
                            setError(result.error?.value);
                            return;
                        }

                        setError("");

                        setInitialPersonalData(changedPersonalDataDto);
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

export default ChangeUserPersonalDataFormPage;
