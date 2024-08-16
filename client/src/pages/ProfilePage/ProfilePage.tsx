import { Outlet } from "react-router-dom";
import ProfilePageSideBar from "./components/ProfilePageSideBar";


function ProfilePage() {
    return (
        <div className="block px-4 lg:flex">
            <ProfilePageSideBar />
            <Outlet />
        </div>
    );
}

export default ProfilePage;
