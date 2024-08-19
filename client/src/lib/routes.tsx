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
import signInPageAction from "@/pages/SigninPage/actions/signInPageAction.ts";
import VkAuthRedirectPage from "@/pages/VkAuthRedirectPage/VkAuthRedirectPage.tsx";
import SignUpPage from "@/pages/SignUpPage/SignUpPage.tsx";
import isAuthenticatedLoader from "@/utils/loaders/isAuthenticatedLoader.ts";
import signUpPageAction from "@/pages/SignUpPage/actions/signUpPageAction.ts";
import ConfirmEmailPage from "@/pages/ConfirmEmailPage/ConfirmEmailPage.tsx";
import confirmEmailPageAction from "@/pages/ConfirmEmailPage/actions/confirmEmailPageAction.ts";
import AddNameAndEmailPage from "@/pages/AddNameAndEmailPage/AddNameAndEmailPage.tsx";
import addNameAndEmailPageAction from "@/pages/AddNameAndEmailPage/actions/addNameAndEmailPageAction.ts";
import RequestPasswordResetPage from "@/pages/RequestPasswordReset/RequestPasswordResetPage.tsx";
import requestPasswordResetAction from "@/pages/RequestPasswordReset/actions/requestPasswordResetAction.ts";
import ResetPasswordPage from "@/pages/ResetPassword/ResetPasswordPage.tsx";
import resetPasswordPageAction from "@/pages/ResetPassword/actions/resetPasswordPageAction.ts";

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
                action: signInPageAction,
                loader: isAuthenticatedLoader,
            },
            {
                path: "sign-up",
                element: <SignUpPage />,
                action: signUpPageAction,
                loader: isAuthenticatedLoader,
            },
            {
                path: "vk-auth-redirect",
                element: <VkAuthRedirectPage />,
            },
            {
                path: "confirm-email",
                element: <ConfirmEmailPage />,
                action: confirmEmailPageAction,
                loader: isAuthenticatedLoader,
            },
            {
                path: "add-name-and-email",
                element: <AddNameAndEmailPage />,
                action: addNameAndEmailPageAction,
                loader: isAuthenticatedLoader,
            },
            {
                path: "request-password-reset",
                element: <RequestPasswordResetPage />,
                action: requestPasswordResetAction,
            },
            {
                path: "reset-password",
                element: <ResetPasswordPage />,
                action: resetPasswordPageAction,
            },
        ],
    },
];
