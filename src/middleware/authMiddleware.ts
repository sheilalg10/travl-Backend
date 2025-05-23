import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: "Acceso denegado, token no proporcionado" });
    return;
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Token inválido o expirado" });
      return;
    }
    next();
  });
};
