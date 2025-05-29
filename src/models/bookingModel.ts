import mongoose, { Schema, Document } from "mongoose";
import Booking from "../interfaces/bookingInterface";

export interface IBooking extends Booking, Document {
  id: string;
  name: string;
  image: string;
  orderDate: string;
  checkIn: {
    date: string;
    hour: string;
  };
  checkOut: {
    date: string;
    hour: string;
  };
  specialRequest: {
    status: boolean;
    text: string;
  };
  roomType: string;
  status: "Refund" | "Pending" | "Booked" | "Cancelled";
}

const BookingSchema: Schema = new Schema(
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
      enum: ["Pending", "Booked", "Cancelled", "Refund"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model<IBooking>("Booking", BookingSchema);
