import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/lib/routes.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AttireProvider from "@/context/AttireProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { worker } from "@/lib/msw/browser.ts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

worker.start().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <QueryClientProvider client={queryClient}>
            <AttireProvider>
                <RouterProvider router={createBrowserRouter(routes)} />
            </AttireProvider>
        </QueryClientProvider>,
    );
});
