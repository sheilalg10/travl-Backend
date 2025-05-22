import express from "express";
import apiRouter from "./routes/apiRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
