import { Request, Response } from "express";
import { addUser, deleteUser, fetchAllUsers, fetchUserById, updateUser } from "../services/usersService";
import Users from "../interfaces/usersInterfaces";

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

// GET /users - Obtener todas los usuarios
export const getAllUsers = (req: Request, res: Response): void => {
    const users = fetchAllUsers();
    res.json(users);
}

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: Usuario no encontrada
 */

// GET /users/:id - Obtener un usuario por ID
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

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       400:
 *         description: Datos inválidos
 */

// POST /users - Crear un nuevo usuario
export const createUser = (req: Request, res: Response): void => {
    const newUser: Users = req.body;
    const createsUser = addUser(newUser);
    res.status(201).json(createsUser);
}

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: Usuario no encontrado
 */

// PUT /users/:id - Actualizar un usuario
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

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */

// DELETE /users/:id - Eliminar un usuario
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