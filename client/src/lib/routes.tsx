import HomePage from "../pages/HomePage/HomePage.tsx";
import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import CatalogPage from "@/pages/CatalogPage/CatalogPage.tsx";
import ProductDetailsPage from "@/pages/ProductDetailsPage/ProductDetailsPage.tsx";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage.tsx";
import ProfilePage from "@/pages/ProfilePage/ProfilePage.tsx";
import UserAddressPage from "@/pages/ProfilePage/pages/UserAddressPage/UserAddressPage.tsx";
import UserListOrdersPage from "@/pages/ProfilePage/pages/UserListOrdersPage/UserListOrdersPage.tsx";
import UserPersonalDataPage from "@/pages/ProfilePage/pages/UserPersonalDataPage/UserPersonalDataPage.tsx";
import CartPage from "@/pages/CartPage/CartPage.tsx";
import profilePageLoader from "@/pages/ProfilePage/loaders/profilePageLoader.ts";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.tsx";
import SignInPage from "@/pages/SigninPage/SignInPage.tsx";

export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
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
                loader: profilePageLoader,
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
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "sign-in",
                element: <SignInPage />,
            },
        ],
    },
];
