import { connectDB } from "../database/db"

const seed = async () => {
    await connectDB();
}

seed();