import HomePage from "../pages/HomePage/HomePage.tsx";
import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import CatalogPage from "@/pages/CatalogPage/CatalogPage.tsx";
import ProductDetailsPage from "@/pages/ProductDetailsPage/ProductDetailsPage.tsx";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage.tsx";
import ProfilePage from "@/pages/ProfilePage/ProfilePage.tsx";
import UserAddressPage from "@/pages/ProfilePage/pages/UserAddressPage/UserAddressPage.tsx";
import UserListOrdersPage from "@/pages/ProfilePage/pages/UserListOrdersPage/UserListOrdersPage.tsx";
import UserPersonalDataPage from "@/pages/ProfilePage/pages/UserPersonalDataPage/UserPersonalDataPage.tsx";

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
                element: <CatalogPage />,
            },
            {
                path: "products/:productId",
                element: <ProductDetailsPage />,
            },
            {
                path: "favorites",
                element: <FavoritesPage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
                children: [
                    {
                        index: true,
                        element: <UserListOrdersPage />,
                    },
                    {
                        path: "address",
                        element: <UserAddressPage />,
                    },
                    {
                        path: "personalData",
                        element: <UserPersonalDataPage />,
                    },
                ],
            },
        ],
    },
];
