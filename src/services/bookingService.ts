import path from "path";
import fs from "fs";
import Booking from "../interfaces/bookingInterface";

const bookingPath = path.join(__dirname, "../data/bookings.json");

function readBookings(): Booking[] {
  const jsonData = fs.readFileSync(bookingPath, "utf-8");
  return JSON.parse(jsonData);
}

function writeBookings(bookings: Booking[]): void {
  fs.writeFileSync(bookingPath, JSON.stringify(bookings, null, 2), "utf-8");
}

// GET all
export const fetchAllBookings = (): Booking[] => {
  return readBookings();
};

// GET by ID
export const fetchBookingById = (id: string): Booking | undefined => {
  return readBookings().find((booking) => booking.id === id);
};

// POST
export const addBooking = (booking: Booking): Booking => {
  const bookings = readBookings();
  bookings.push(booking);
  writeBookings(bookings);
  return booking;
};

// PUT
export const updateBooking = (
  id: string,
  updatedData: Partial<Booking>
): Booking | null => {
  const bookings = readBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const updatedBooking = { ...bookings[index], ...updatedData };
  bookings[index] = updatedBooking;
  writeBookings(bookings);
  return updatedBooking;
};

// DELETE
export const deleteBooking = (id: string): boolean => {
  const bookings = readBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index === -1) return false;

  bookings.splice(index, 1);
  writeBookings(bookings);
  return true;
};
