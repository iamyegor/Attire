import { useLoadUserPersonalData } from "./hooks/useLoadUserPersonalData";
import { useState } from "react";
import CurrentPersonalDataPage from "./types/CurrentPersonalDataPage";
import ChangeUserPersonalDataFormPage from "./pages/ChangeUserPersonalDataFormPage";
import ChangeUserPasswordFormPage from "./pages/ChangeUserPasswordFormPage/ChangeUserPasswordFormPage";
import useUserPersonalDataTranslation from "./hooks/useUserPersonalDataTranslation";

function UserPersonalDataPage() {
    const { personalData, setPersonalData, isLoading } = useLoadUserPersonalData();
    const [currentPage, setCurrentPage] = useState<CurrentPersonalDataPage>("readPage");
    const t = useUserPersonalDataTranslation();

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full max-w-[560px]">
            {isLoading ? (
                <>{t.loading}</>
            ) : currentPage === "readPage" ? (
                personalData ? (
                    <div>
                        <h3 className="text-[24px] font-semibold mb-[30px]">{t.personalData}</h3>
                        <div className="text-[16px]">
                            <div className="pb-[16px]">{`${t.name}: ${personalData.firstName}`}</div>
                            <div className="pb-[32px]">{`${t.email}: ${personalData.email}`}</div>

                            <div className="mb-[16px]">
                                <button
                                    className="text-[#1877F2]"
                                    onClick={() => setCurrentPage("changePersonalDataPage")}
                                >
                                    {t.changePersonalData}
                                </button>
                            </div>

                            <div>
                                <button
                                    className="text-[#1877F2]"
                                    onClick={() => setCurrentPage("changePasswordPage")}
                                >
                                    {t.changePassword}
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>{t.dataNotLoaded}</div>
                )
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
