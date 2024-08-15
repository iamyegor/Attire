import fetchLogout from "@/utils/services/fetchLogout";
import { Link, NavLink, useNavigate } from "react-router-dom";

function ProfilePageSideBar() {
    const nav = useNavigate();

    return (
        <div className="">
            <div className="px-[13px] py-[10px] bg-[#EDEDED] py-[6px] px-[10px] rounded-md w-full lg:w-[250px]">
                <NavLink
                    to="."
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-md block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-md block"
                    }
                    end
                >
                    История заказов
                </NavLink>

                <NavLink
                    to="address"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-md block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-md block"
                    }
                    end
                >
                    Адрес доставки
                </NavLink>

                <NavLink
                    to="personalData"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-md block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-md block"
                    }
                    end
                >
                    Личные данные
                </NavLink>

                <button
                    onClick={async () => {
                        await fetchLogout();

                        nav("/");
                    }}
                    className="bg-[#EDEDED] py-[6px] px-[10px] rounded-md block"
                >
                    Выход
                </button>
            </div>
        </div>
    );
}

export default ProfilePageSideBar;
