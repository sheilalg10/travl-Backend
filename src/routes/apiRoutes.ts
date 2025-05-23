import { Router } from "express";
import routerRoom from "./roomsRouter";
import routerBooking from "./bookingRouter";
import routerEmployees from "./employeesRouter";

const apiRoutes = Router();

apiRoutes.get("/", (req, res) => {
  res.json({
    hotelName: "Hotel Miranda",
    message: "Bienvenido a la API del Hotel Miranda",
    availableEndpoints: [
      { path: "/api/rooms", methods: ["GET", "POST"] },
      { path: "/api/rooms/:id", methods: ["GET", "PUT", "DELETE"] },
      { path: "/api/bookings", methods: ["GET", "POST"] },
      { path: "/api/bookings/:id", methods: ["GET", "PUT", "DELETE"] },
      { path: "/api/employees", methods: ["GET", "POST"] },
      { path: "/api/employees/:id", methods: ["GET", "PUT", "DELETE"] },
    ],
  });
});

apiRoutes.use("/rooms", routerRoom);
apiRoutes.use("/bookings", routerBooking);
apiRoutes.use("/employees", routerEmployees);

export default apiRoutes;
