import { Request, Response } from "express";
import {
  addBooking,
  deleteBooking,
  fetchAllBookings,
  fetchBookingById,
  updateBooking
} from "../services/bookingService";
import Booking from "../interfaces/bookingInterface";

export const getAllBookings = (req: Request, res: Response): void => {
  const bookings = fetchAllBookings();
  res.json(bookings);
};

export const getOneBooking = (req: Request, res: Response): void => {
  const booking = fetchBookingById(req.params.id);
  if (!booking) {
    res.status(404).json({
      message: "Booking not found",
    });
    return;
  }

  res.json(booking);
};

export const createBooking = (req: Request, res: Response): void => {
  const newBooking: Booking = req.body;
  const createsBooking = addBooking(newBooking);
  res.status(201).json(createsBooking);
};

export const updateBookings = (req: Request, res: Response): void => {
    const updated = updateBooking(req.params.id, req.body);
      if (!updated) {
        res.status(404).json({ message: 'Booking not found' });
        return;
      }
      res.json(updated);
};

export const deleteBookingById = (req: Request, res: Response): void => {
  const deleted = deleteBooking(req.params.id);
  if (!deleted) {
    res.status(404).json({ message: 'Booking not found' });
    return;
  }
  res.status(204).send();
};
