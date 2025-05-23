import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    const token = jwt.sign(
      { username: "admin" },
      process.env.SECRET_KEY as string,
      { expiresIn: "1h" }
    );

    res.json({ token });
    return;
  }

  res.status(401).json({ message: "Credenciales inválidas" });
};