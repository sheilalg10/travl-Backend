import { Router } from "express";
import { createEmployee, deleteEmployeeById, getAllEmployees, getOneEmployee, updateEmployees } from "../controllers/employeesController";

const routerEmployees = Router();

routerEmployees.get('/', getAllEmployees);
routerEmployees.get('/:id', getOneEmployee);
routerEmployees.post('/', createEmployee);
routerEmployees.put('/:id', updateEmployees);
routerEmployees.delete('/', deleteEmployeeById);

export default routerEmployees;