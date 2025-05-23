import express from "express";
import apiRouter from "./routes/apiRoutes";
import dotenv from "dotenv";
import cors from "cors";
import { setupSwagger } from './docs/swagger';

dotenv.config()

const app = express();
const PORT = 3000;

setupSwagger(app);

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
