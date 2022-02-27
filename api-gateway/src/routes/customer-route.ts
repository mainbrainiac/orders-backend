import { Route } from "@/routes/types/route";

export const customerRoute: Route = {
    url: '/customer',
    auth: false,
    rateLimit: {
        windowMs: 15 * 60 * 1000,
        max: 2
    },
    proxy: {
        target: "http://localhost:3031/api",
        changeOrigin: true,
        pathRewrite: {
            [`^/customer`]: '',
        },
    }
}