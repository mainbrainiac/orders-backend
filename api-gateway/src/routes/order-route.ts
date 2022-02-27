import { Route } from "@/routes/types/route";

export const orderRoute: Route = {
    url: '/order',
    auth: false,
    rateLimit: {
        windowMs: 15 * 60 * 1000,
        max: 2
    },
    proxy: {
        target: "http://localhost:3032/api",
        changeOrigin: true,
        pathRewrite: {
            [`^/order`]: '',
        },
    }
}