import { Router } from "express";
import { createBooking, deleteBookingById, getAllBookings, getOneBooking, updateBookings } from "../controllers/bookingsController";

const routerBooking = Router();

routerBooking.get('/', getAllBookings);
routerBooking.get('/:id', getOneBooking);
routerBooking.post('/', createBooking);
routerBooking.put('/:id', updateBookings);
routerBooking.delete('/:id', deleteBookingById);

export default routerBooking;