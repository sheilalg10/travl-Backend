import { Booking, IBooking } from "../../models/bookingModel";

export const getBookings = async () => {
    return await Booking.find();
}

export const getBooking = async (id: string) => {
    return await Booking.findById(id);
}

export const addBooking = async (data: IBooking) => {
    const booking = new Booking(data);
    return await booking.save();
}

export const updateBooking = async (id: string, data: Partial<IBooking>) => {
    return await Booking.findByIdAndUpdate(id, data, {new: true});
}

export const deleteBooking = async (id: string) => {
    return await Booking.findByIdAndDelete(id);
}