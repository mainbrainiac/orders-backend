import { rateLimit } from "express-rate-limit"
import { Express } from "express";
import { Route } from "@/routes/types/route";

export const setupRateLimit = (app: Express, routes: Route[]) => {
    routes.forEach(r => {
        if (r.rateLimit) {
            app.use(r.url, rateLimit(r.rateLimit));
        }
    })
}
