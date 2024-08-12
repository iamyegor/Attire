import { Outlet } from "react-router-dom";
import Header from "@/components/RootLayout/Header/Header.tsx";
import Footer from "@/components/RootLayout/Footer/Footer.tsx";

export default function RootLayout() {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="pt-[65px] md:pt-[75px] min-h-screen max-w-screen-2xl w-full">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}
