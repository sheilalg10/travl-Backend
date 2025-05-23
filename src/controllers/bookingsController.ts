import { Request, Response } from "express";
import {
  addBooking,
  deleteBooking,
  fetchAllBookings,
  fetchBookingById,
  updateBooking
} from "../services/bookingService";
import Booking from "../interfaces/bookingInterface";

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Obtener lista de reservas
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bookings'
 */

// GET /bookings - Obtener todas las reservas
export const getAllBookings = (req: Request, res: Response): void => {
  const bookings = fetchAllBookings();
  res.json(bookings);
};

/**
 * @swagger
 * /bookings/{id}:
 *   get:
 *     summary: Obtener reserva por ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookings'
 *       404:
 *         description: Reserva no encontrada
 */

// GET /bookings/:id - Obtener una reserva por ID
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

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags:
 *       - Bookings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bookings'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookings'
 *       400:
 *         description: Datos inválidos
 */

// POST /bookings - Crear una nueva reserva
export const createBooking = (req: Request, res: Response): void => {
  const newBooking: Booking = req.body;
  const createsBooking = addBooking(newBooking);
  res.status(201).json(createsBooking);
};

/**
 * @swagger
 * /bookings/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bookings'
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookings'
 *       404:
 *         description: Reserva no encontrada
 */

// PUT /bookings/:id - Actualizar una reserva
export const updateBookings = (req: Request, res: Response): void => {
    const updated = updateBooking(req.params.id, req.body);
      if (!updated) {
        res.status(404).json({ message: 'Booking not found' });
        return;
      }
      res.json(updated);
};

/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       204:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */

// DELETE /bookings/:id - Eliminar una reserva
export const deleteBookingById = (req: Request, res: Response): void => {
  const deleted = deleteBooking(req.params.id);
  if (!deleted) {
    res.status(404).json({ message: 'Booking not found' });
    return;
  }
  res.status(204).send();
};
