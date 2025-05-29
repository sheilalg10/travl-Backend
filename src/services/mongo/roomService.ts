import { Room } from "../../models/roomsModel"

export const getRooms = async () => {
    return await Room.find();
};

export const getRoomId = async (id: string) => {
    return await Room.findById(id);
};