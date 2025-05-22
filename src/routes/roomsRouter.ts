import { Router } from "express";
import { createRoom, deleteRoomById, getAllRooms, getOneRoom, updateRoomById } from "../controllers/roomsController";

const routerRoom = Router();

routerRoom.get('/', getAllRooms);
routerRoom.get('/:id', getOneRoom);
routerRoom.post('/', createRoom);
routerRoom.put('/:id', updateRoomById);
routerRoom.delete('/:id', deleteRoomById);

export default routerRoom;