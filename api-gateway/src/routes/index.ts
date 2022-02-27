import { Route } from "@/routes/types/route";

import { customerRoute } from "@/routes/customer-route";
import { orderRoute } from "@/routes/order-route";

export const ROUTES: Route[] = [orderRoute, customerRoute];