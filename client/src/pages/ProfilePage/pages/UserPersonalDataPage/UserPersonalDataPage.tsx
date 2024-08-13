import { Link } from "react-router-dom";
import { useLoadUserPersonalData } from "./hooks/useLoadUserPersonalData";

function UserPersonalDataPage() {
    const { personalData, isPending } = useLoadUserPersonalData();

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full">
            <h3 className="text-[24px] font-semibold mb-[30px]">Личные данные</h3>
            {isPending ? (
                <>Загрузка данных...</>
            ) : (
                <div className="text-[16px]">
                    <div className="pb-[16px]">{"Имя: " + personalData?.firstName}</div>
                    <div className="pb-[16px]">{"Фамилия: " + personalData?.lastName}</div>
                    <div className="pb-[16px]">{"Телефон: " + personalData?.phone}</div>
                    <div className="pb-[32px]">{"Почта " + personalData?.email}</div>

                    <div className="mb-[16px]">
                        <Link className="text-[#1877F2]" to="changeForm">
                            Изменить личные данные
                        </Link>
                    </div>

                    <div>
                        <Link className="text-[#1877F2]" to="changeForm">
                            Изменить пароль
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserPersonalDataPage;
