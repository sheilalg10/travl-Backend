import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import { Room } from "../models/roomsModel";
import { Booking } from "../models/bookingModel";
import { User } from "../models/usersModel";
import { Employees } from "../models/employeesModel";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");

    await Promise.all([
      Room.deleteMany({}),
      Booking.deleteMany({}),
      User.deleteMany({}),
      Employees.deleteMany({}),
    ]);

    await Promise.all(
      Array.from({ length: 10 }).map(() =>
        Employees.create({
          image: faker.image.avatar(),
          name: faker.person.fullName(),
          id: faker.string.uuid(),
          joined: faker.date.past().toISOString().split("T")[0],
          jobDesk: faker.helpers.arrayElements(
            ["Receptionist", "Cleaner", "Chef", "Manager"],
            2
          ),
          schedule: faker.helpers.arrayElements(
            ["Morning", "Evening", "Night"],
            2
          ),
          contact: faker.phone.number(),
          status: faker.helpers.arrayElement(["Active", "Inactive"]),
        })
      )
    );

    await Promise.all(
      Array.from({ length: 10 }).map(() =>
        Room.create({
          id: faker.string.uuid(),
          roomNumber: faker.string.numeric(3),
          name: `${faker.word.adjective()} Room`,
          bedType: faker.helpers.arrayElement([
            "Single",
            "Double",
            "Queen",
            "King",
          ]),
          roomFloor: `Floor ${faker.number.int({ min: 1, max: 10 })}`,
          facilities: faker.helpers.arrayElements(
            ["WiFi", "TV", "AC", "Balcony", "Minibar"],
            3
          ),
          rate: faker.commerce.price({
            min: 50,
            max: 300,
            dec: 0,
            symbol: "$",
          }),
          image: faker.image.url(),
          status: faker.helpers.arrayElement(["Available", "Booked"]),
          description: faker.lorem.sentence(),
        })
      )
    );

    const roomTypes = ["Single", "Double", "Suite", "Deluxe"];
    const statusesBooking = ["Refund", "Pending", "Booked", "Cancelled"];
    const statusesUser = ["Check In", "Check Out", "Booked", "Cancelled"];

    await Promise.all(
      Array.from({ length: 10 }).map(() =>
        Booking.create({
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          image: faker.image.avatar(),
          orderDate: faker.date.past().toISOString().split("T")[0],
          checkIn: {
            date: faker.date.future().toISOString().split("T")[0],
            hour: `${faker.number.int({ min: 12, max: 18 })}:00`,
          },
          checkOut: {
            date: faker.date.future({ years: 0.1 }).toISOString().split("T")[0],
            hour: `${faker.number.int({ min: 8, max: 11 })}:00`,
          },
          specialRequest: {
            status: faker.datatype.boolean(),
            text: faker.lorem.sentence(),
          },
          roomType: faker.helpers.arrayElement(roomTypes),
          status: faker.helpers.arrayElement(statusesBooking),
        })
      )
    );

    await Promise.all(
      Array.from({ length: 10 }).map(() =>
        User.create({
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          image: faker.image.avatar(),
          orderDate: faker.date.past().toISOString().split("T")[0],
          checkIn: {
            date: faker.date.future().toISOString().split("T")[0],
            hour: `${faker.number.int({ min: 12, max: 18 })}:00`,
          },
          checkOut: {
            date: faker.date.future({ years: 0.1 }).toISOString().split("T")[0],
            hour: `${faker.number.int({ min: 8, max: 11 })}:00`,
          },
          specialRequest: {
            status: faker.datatype.boolean(),
            text: faker.lorem.sentence(),
          },
          roomType: faker.helpers.arrayElement(roomTypes),
          status: faker.helpers.arrayElement(statusesUser),
        })
      )
    );

    console.log("Seed ejecutado con éxito.");
    process.exit(0);
  } catch (error) {
    console.error("Error al ejecutar el seed:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

seed();
