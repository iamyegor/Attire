import { Link, NavLink } from "react-router-dom";

function ProfilePageSideBar() {
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
                    Адрес достав
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

                <Link to="quit" className="bg-[#EDEDED] py-[6px] px-[10px] rounded-md block">
                    Выход
                </Link>
            </div>
        </div>
    );
}

export default ProfilePageSideBar;
