import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "";
    if (!mongoURI) throw new Error("MONGO_URI no definido en .env");

    await mongoose.connect(mongoURI);
    console.log("Conectado a MongoDB:", mongoose.connection.name);

    mongoose.connection.on("error", (err) => {
      console.error("Error de conexión:", err);
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
