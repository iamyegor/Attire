import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {},
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 80,
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
