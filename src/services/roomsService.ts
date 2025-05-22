import path from "path";
import fs from "fs";
import Room from "../interfaces/roomsInterface";

const roomsPath = path.join(__dirname, "../data/rooms.json");

// Leemos el array directamente
function readRooms(): Room[] {
  const jsonData = fs.readFileSync(roomsPath, "utf-8");
  return JSON.parse(jsonData);
}

// Escribimos el array directamente
function writeRooms(rooms: Room[]): void {
  fs.writeFileSync(roomsPath, JSON.stringify(rooms, null, 2), "utf-8");
}

// GET all
export const fetchAllRooms = (): Room[] => {
  return readRooms();
};

// GET by ID
export const fetchRoomById = (id: string): Room | undefined => {
  return readRooms().find((room) => room.id === id);
};

// POST
export const addRoom = (room: Room): Room => {
  const rooms = readRooms();
  rooms.push(room);
  writeRooms(rooms);
  return room;
};

// PUT
export const updateRoom = (id: string, updatedData: Partial<Room>): Room | null => {
  const rooms = readRooms();
  const index = rooms.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const updatedRoom = { ...rooms[index], ...updatedData };
  rooms[index] = updatedRoom;
  writeRooms(rooms);
  return updatedRoom;
};

// DELETE
export const deleteRoom = (id: string): boolean => {
  const rooms = readRooms();
  const index = rooms.findIndex((r) => r.id === id);
  if (index === -1) return false;

  rooms.splice(index, 1);
  writeRooms(rooms);
  return true;
};
