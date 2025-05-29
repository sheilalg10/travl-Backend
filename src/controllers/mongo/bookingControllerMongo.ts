import { IBooking } from "../../models/bookingModel";
import { addBooking, deleteBooking, getBooking, getBookings, updateBooking } from "../../services/mongo/bookingServiceMongo"

export const allBookings = async () => {
    return await getBookings();
}

export const oneBooking = async (id: string) => {
    return await getBooking(id);
}

export const createBooking = async (data: IBooking) => {
    return await addBooking(data);
}

export const updateBookingById = async (id: string, data: Partial<IBooking>) => {
    return await updateBooking(id, data);
}

export const deleteBookingById = async (id: string) => {
    return await deleteBooking(id);
}