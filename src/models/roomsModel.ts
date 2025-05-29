import mongoose, { Schema, Document } from 'mongoose';
import Room from '../interfaces/roomsInterface';

export interface IRoom extends Room, Document {
  id: string;
  roomNumber: string;
  name: string;
  bedType: string;
  roomFloor: string;
  facilities: string[];
  rate: string;
  image: string;
  status: "Available" | "Booked";
  description: string;
}

const roomSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    roomNumber: { type: String, required: true },
    name: { type: String, required: true },
    bedType: { type: String, required: true },
    roomFloor: { type: String, required: true },
    facilities: { type: [String], required: true },
    rate: { type: String, required: true },
    image: { type: String, required: true },
    status: {
      type: String,
      enum: ["Available", "Booked"],
      default: "Available",
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model<IRoom>('Room', roomSchema);