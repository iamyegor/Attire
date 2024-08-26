import { useLoadUserPersonalData } from "./hooks/useLoadUserPersonalData";
import { useState } from "react";
import CurrentPersonalDataPage from "./types/CurrentPersonalDataPage";
import ChangeUserPersonalDataFormPage from "./pages/ChangeUserPersonalDataFormPage";
import ChangeUserPasswordFormPage from "./pages/ChangeUserPasswordFormPage/ChangeUserPasswordFormPage";

function UserPersonalDataPage() {
    const { personalData, setPersonalData, isPending } = useLoadUserPersonalData();
    const [currentPage, setCurrentPage] = useState<CurrentPersonalDataPage>("readPage");

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full max-w-[560px]">
            {isPending ? (
                <>Загрузка данных...</>
            ) : currentPage === "readPage" ? (
                <div>
                    <h3 className="text-[24px] font-semibold mb-[30px]">Личные данные</h3>
                    <div className="text-[16px]">
                        <div className="pb-[16px]">{"Имя: " + personalData?.firstName}</div>
                        <div className="pb-[16px]">{"Фамилия: " + personalData?.lastName}</div>
                        <div className="pb-[32px]">{"Почта: " + personalData?.email}</div>

                        <div className="mb-[16px]">
                            <button
                                className="text-[#1877F2]"
                                onClick={() => setCurrentPage("changePersonalDataPage")}
                            >
                                Изменить личные данные
                            </button>
                        </div>

                        <div>
                            <button
                                className="text-[#1877F2]"
                                onClick={() => setCurrentPage("changePasswordPage")}
                            >
                                Изменить пароль
                            </button>
                        </div>
                    </div>
                </div>
            ) : currentPage === "changePersonalDataPage" ? (
                <ChangeUserPersonalDataFormPage
                    initialPersonalData={personalData!}
                    setInitialPersonalData={setPersonalData}
                    setCurrentPage={setCurrentPage}
                />
            ) : (
                <ChangeUserPasswordFormPage setCurrentPage={setCurrentPage} />
            )}
        </div>
    );
}

export default UserPersonalDataPage;
