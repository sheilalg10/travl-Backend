import { IRoom, Room } from "../../models/roomsModel"

export const getRooms = async () => {
    return await Room.find();
};

export const getRoomId = async (id: string) => {
    return await Room.findById(id);
};

export const addRoom = async (data: IRoom) => {
    const room = new Room(data);
    return await room.save();
}

export const updateRoom = async (id: string, data: Partial<IRoom>) => {
    return await Room.findByIdAndUpdate(id, data, {new: true});
}

export const deleteRoom = async (id: string) => {
    return await Room.findByIdAndDelete(id);
}