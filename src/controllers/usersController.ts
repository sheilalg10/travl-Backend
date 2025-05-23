import { Request, Response } from "express";
import { addUser, deleteUser, fetchAllUsers, fetchUserById, updateUser } from "../services/usersService";
import Users from "../interfaces/usersInterfaces";

export const getAllUsers = (req: Request, res: Response): void => {
    const users = fetchAllUsers();
    res.json(users);
}

export const getOneUser = (req: Request, res: Response): void => {
    const user = fetchUserById(req.params.id);
    if(!user) {
        res.status(404).json({
            message: "User not foud",
        });
        return;
    }
    res.json(user);
}

export const createUser = (req: Request, res: Response): void => {
    const newUser: Users = req.body;
    const createsUser = addUser(newUser);
    res.status(201).json(createsUser);
}

export const updateUsers = (req: Request, res: Response): void => {
    const updated = updateUser(req.params.id, req.body);
    if(!updated) {
        res.status(404).json({
            message: 'User not found',
        });
        return;
    }
    res.json(updated);
}

export const deleteUsers = (req: Request, res: Response): void => {
    const deleted = deleteUser(req.params.id);
    if(!deleted) {
        res.status(404).json({
            message: 'User not found',
        });
        return;
    }
    res.status(204).send();
}