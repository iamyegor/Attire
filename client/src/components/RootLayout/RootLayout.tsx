import Footer from "@/components/RootLayout/Footer/Footer.tsx";
import Header from "@/components/RootLayout/Header/Header.tsx";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="overflow-y-auto">
            <Header />
            <div className="flex justify-center">
                <div className="pt-[75px] min-h-screen max-w-[1500px] w-full">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
