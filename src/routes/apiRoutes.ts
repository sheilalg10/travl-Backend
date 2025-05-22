import { Router } from "express";
import routerRoom from "./roomsRouter";
import routerBooking from "./bookingRouter";

const apiRoutes = Router();

apiRoutes.use('/rooms', routerRoom);
apiRoutes.use('/bookings', routerBooking);

export default apiRoutes;