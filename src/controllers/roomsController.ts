import { Request, Response } from 'express';
import { addRoom, deleteRoom, fetchAllRooms, fetchRoomById, updateRoom } from '../services/roomsService';
import Room from '../interfaces/roomsInterface';

// GET /rooms - Obtener todas las habitaciones
export const getAllRooms = (req: Request, res: Response) =>{
    const rooms = fetchAllRooms();
    res.json(rooms);
}

// GET /rooms/:id - Obtener una habitacion por id
export const getOneRoom = (req: Request, res: Response) => {
    const room = fetchRoomById(req.params.id);
    if(!room) {
        res.status(404).json({
            message: 'Room not found'
        });
    }

    res.json(room);
};

// POST /rooms - Crea una nueva habitacion
export const createRoom = (req: Request, res: Response): void =>{
    const newRoom: Room = req.body;
    const createdRoom = addRoom(newRoom);
    res.status(201).json(createdRoom);
}

// PUT /rooms/:id - actualizar una habitación
export const updateRoomById = (req: Request, res: Response): void => {
  const updated = updateRoom(req.params.id, req.body);
  if (!updated) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  res.json(updated);
};

// DELETE /rooms/:id - eliminar una habitación
export const deleteRoomById = (req: Request, res: Response): void => {
  const deleted = deleteRoom(req.params.id);
  if (!deleted) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  res.status(204).send(); // No Content
};