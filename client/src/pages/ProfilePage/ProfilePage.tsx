import { Outlet, useLocation } from "react-router-dom";
import ProfilePageSideBar from "./components/ProfilePageSideBar";
import { useEffect } from "react";

function ProfilePage() {
    const location = useLocation();
    useEffect(() => console.log(location.pathname));

    return (
        <div className="block px-4 lg:flex">
            <ProfilePageSideBar />
            <Outlet />
        </div>
    );
}

export default ProfilePage;
