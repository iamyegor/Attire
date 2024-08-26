import BlueBackButton from "@/assets/blue-arrow-circle-left.png";
import { useState } from "react";
import CurrentPersonalDataPage from "../types/CurrentPersonalDataPage";
import { PersonalData } from "../types/PersonalData";
import Input from "@/components/ui/Input";
import { SuccessOr } from "@/types/results/SuccessOr";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { EmptyResult } from "@/types/results/EmptyResult";
import fetchChangePersonalData from "@/utils/services/profile/fetchChangePersonalData.ts";

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
                        const result: SuccessOr<ErrorMessage> =
                            await fetchChangePersonalData(changedPersonalData);

                        if (result.isFailure) {
                            setError(result.error?.value);
                            return;
                        }

                        setError("");

                        setInitialPersonalData(changedPersonalData);
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
