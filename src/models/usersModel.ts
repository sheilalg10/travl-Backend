import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  name: string;
  image: string;
  orderDate: string;
  checkIn: { date: string; hour: string };
  checkOut: { date: string; hour: string };
  specialRequest: { status: boolean; text: string };
  roomType: string;
  status: "Check In" | "Check Out" | "Booked" | "Cancelled";
}

const UserSchema: Schema = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    orderDate: { type: String, required: true },
    checkIn: {
      date: { type: String, required: true },
      hour: { type: String, required: true },
    },
    checkOut: {
      date: { type: String, required: true },
      hour: { type: String, required: true },
    },
    specialRequest: {
      status: { type: Boolean, required: true },
      text: { type: String },
    },
    roomType: { type: String, required: true },
    status: {
      type: String,
      enum: ["Check In", "Check Out", "Booked", "Cancelled"],
      default: "Check In",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
