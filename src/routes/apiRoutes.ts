import { Router } from "express";
import routerRoom from "./roomsRouter";

const apiRoutes = Router();

apiRoutes.use('/rooms', routerRoom);

export default apiRoutes;