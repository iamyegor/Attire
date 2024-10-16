import { NavLink, useNavigate } from "react-router-dom";
import fetchLogout from "@/utils/services/auth/fetchLogout.ts";
import useProfileSidebarTranslation from "./hooks/useProfileSidebarTranslation";

function ProfilePageSideBar() {
    const nav = useNavigate();
    const t = useProfileSidebarTranslation();

    return (
        <div className="">
            <div className="px-[13px] py-[10px] bg-[#EDEDED] rounded-lg w-full lg:w-[250px]">
                <NavLink
                    to="."
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-lg block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-lg block"
                    }
                    end
                >
                    {t.orderHistory}
                </NavLink>

                <NavLink
                    to="address"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-lg block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-lg block"
                    }
                    end
                >
                    {t.deliveryAddress}
                </NavLink>

                <NavLink
                    to="personalData"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#D9D9D9] py-[6px] px-[10px] rounded-lg block"
                            : "bg-[#EDEDED] py-[6px] px-[10px] rounded-lg block"
                    }
                    end
                >
                    {t.personalData}
                </NavLink>
                <button
                    onClick={async () => {
                        await fetchLogout();

                        nav("/");
                    }}
                    className="bg-[#EDEDED] py-[6px] px-[10px] rounded-lg block"
                >
                    {t.logout}
                </button>
            </div>
        </div>
    );
}

export default ProfilePageSideBar;
