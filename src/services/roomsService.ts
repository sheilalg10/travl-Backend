import path from "path";
import fs from 'fs';
import Room from "../interfaces/roomsInterface";

const roomsPath = path.join(__dirname, '../data/rooms.json');

interface Data {
    rooms: Room[]
}

function readData(): Data {
  const jsonData = fs.readFileSync(roomsPath, 'utf-8');
  return JSON.parse(jsonData);
}

function writeData(data: Data): void {
  fs.writeFileSync(roomsPath, JSON.stringify(data, null, 2), 'utf-8');
}

export const fetchAllRooms = (): Room[] => {
  return readData().rooms;
};

export const fetchRoomById = (id: string): Room | undefined => {
  return readData().rooms.find(r => r.id === id);
};

export const addRoom = (room: Room): Room => {
  const data = readData();
  data.rooms.push(room);
  writeData(data);
  return room;
};

export const updateRoom = (id: string, updatedFields: Partial<Room>): Room | null => {
  const data = readData();
  const index = data.rooms.findIndex(room => room.id === id);

  if (index === -1) {
    return null;
  }

  const updatedRoom = {
    ...data.rooms[index],
    ...updatedFields
  };

  data.rooms[index] = updatedRoom;
  writeData(data);

  return updatedRoom;
};

export const deleteRoom = (id: string): boolean => {
  const data = readData();
  const initialLength = data.rooms.length;

  data.rooms = data.rooms.filter(room => room.id !== id);

  if (data.rooms.length === initialLength) {
    return false;
  }

  writeData(data);
  return true;
};