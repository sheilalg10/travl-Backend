import { IRoom } from "../../models/roomsModel";
import { addRoom, deleteRoom, getRoomId, getRooms, updateRoom } from "../../services/mongo/roomServiceMongo"

export const allRooms = async () => {
    return await getRooms();
}

export const oneRoom = async (id: string) => {
    return await getRoomId(id);
}

export const createRoom = async (data: IRoom) => {
    return await addRoom(data);
}

export const updateRoomById = async (id: string, data: Partial<IRoom>) => {
    return await updateRoom(id, data)
}

export const deleteRoomById = async (id: string) => {
    return await deleteRoom(id);
}