import { Router } from "express";
import routerRoom from "./roomsRouter";
import routerBooking from "./bookingRouter";
import routerEmployees from "./employeesRouter";
import routerUser from "./usersRouter";
import authRouter from "./authRouter";
import { authenticateToken } from "../middleware/authMiddleware";


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
      { path: "/api/users", methods: ["GET", "POST"] },
      { path: "/api/users/:id", methods: ["GET", "PUT", "DELETE"] },
      { path: "/api/login", methods: ["POST"] }
    ],
  });
});

apiRoutes.use("/login", authRouter);
apiRoutes.use("/rooms", authenticateToken, routerRoom);
apiRoutes.use("/bookings", authenticateToken, routerBooking);
apiRoutes.use("/employees", authenticateToken, routerEmployees);
apiRoutes.use("/users", authenticateToken, routerUser);

export default apiRoutes;
