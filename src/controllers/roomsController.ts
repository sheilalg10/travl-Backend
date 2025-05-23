import { Request, Response } from 'express';
import { 
  addRoom, 
  deleteRoom, 
  fetchAllRooms, 
  fetchRoomById, 
  updateRoom 
} from '../services/roomsService';
import Room from '../interfaces/roomsInterface';

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Obtener lista de habitaciones
 *     tags:
 *       - Rooms
 *     responses:
 *       200:
 *         description: Lista de habitaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */

// GET /rooms - Obtener todas las habitaciones
export const getAllRooms = (req: Request, res: Response): void => {
  const rooms = fetchAllRooms();
  res.json(rooms);
};

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Obtener habitación por ID
 *     tags:
 *       - Rooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la habitación
 *     responses:
 *       200:
 *         description: Habitación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Habitación no encontrada
 */

// GET /rooms/:id - Obtener una habitación por ID
export const getOneRoom = (req: Request, res: Response): void => {
  const room = fetchRoomById(req.params.id);
  if (!room) {
    res.status(404).json({ message: 'Room not found' });
    return; // <- Evita continuar si no existe
  }
  res.json(room);
};

/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Crear una nueva habitación
 *     tags:
 *       - Rooms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       201:
 *         description: Habitación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       400:
 *         description: Datos inválidos
 */

// POST /rooms - Crear una nueva habitación
export const createRoom = (req: Request, res: Response): void => {
  const newRoom: Room = req.body;
  const createdRoom = addRoom(newRoom);
  res.status(201).json(createdRoom);
};

/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Actualizar una habitación por ID
 *     tags:
 *       - Rooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la habitación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: Habitación actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Habitación no encontrada
 */

// PUT /rooms/:id - Actualizar una habitación
export const updateRoomById = (req: Request, res: Response): void => {
  const updated = updateRoom(req.params.id, req.body);
  if (!updated) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  res.json(updated);
};

/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Eliminar una habitación por ID
 *     tags:
 *       - Rooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la habitación
 *     responses:
 *       204:
 *         description: Habitación eliminada exitosamente
 *       404:
 *         description: Habitación no encontrada
 */

// DELETE /rooms/:id - Eliminar una habitación
export const deleteRoomById = (req: Request, res: Response): void => {
  const deleted = deleteRoom(req.params.id);
  if (!deleted) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  res.status(204).send();
};
