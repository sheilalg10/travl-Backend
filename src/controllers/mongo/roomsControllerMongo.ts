import { getRoomId, getRooms } from "../../services/mongo/roomService"

export const allRooms = async () => {
    return await getRooms();
}

export const oneRoom = async (id: string) => {
    return await getRoomId(id);
}