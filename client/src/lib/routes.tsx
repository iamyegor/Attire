import HomePage from "../pages/HomePage/HomePage.tsx";
import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import CatalogPage from "@/pages/CatalogPage/CatalogPage.tsx";
import React from "react";
import ProductDetailsPage from "@/pages/ProductDetailsPage/ProductDetailsPage.tsx";

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
        ],
    },
];
