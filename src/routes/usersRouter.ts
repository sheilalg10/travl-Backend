import { Router } from "express";
import { createUser, deleteUsers, getAllUsers, getOneUser, updateUsers } from "../controllers/usersController";

const routerUser = Router();

routerUser.get('/', getAllUsers);
routerUser.get('/:id', getOneUser);
routerUser.post('/', createUser);
routerUser.patch('/:id', updateUsers);
routerUser.delete('/:id', deleteUsers);

export default routerUser;