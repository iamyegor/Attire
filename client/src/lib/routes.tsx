import HomePage from "../pages/HomePage/HomePage.tsx";
import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import CatalogPage from "@/pages/CatalogPag/CatalogPage.tsx";

export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "catalog/*",
                element: <CatalogPage />
            }
        ],
    },
];
