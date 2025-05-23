import { Request, Response } from "express";
import { addEmployee, deleteEmployee, fetchAllEmployees, fetchEmployeeById, updateEmployee } from "../services/employeesService"
import Employees from "../interfaces/employeesInterface";

export const getAllEmployees = (req: Request, res: Response): void => {
    const employees = fetchAllEmployees();
    res.json(employees);
}

export const getOneEmployee = (req: Request, res:Response): void => {
    const employee = fetchEmployeeById(req.params.id);
    if (!employee) {
        res.status(404).json({
            message: "Employee not found",
        });
        return;
    }

    res.json(employee);
}

export const createEmployee = (req: Request, res: Response): void => {
    const newEmployee: Employees = req.body;
    const createsEmployee = addEmployee(newEmployee);
    res.status(201).json(createsEmployee);
}

export const updateEmployees = (req: Request, res: Response): void => {
    const updated = updateEmployee(req.params.id, req.body);
    if (!updated) {
        res.status(404).json({
            message: 'Employee not found'
        });
        return;
    }
    res.json(updated);
}

export const deleteEmployeeById = (req: Request, res: Response): void => {
    const deleted = deleteEmployee(req.params.id);
    if (!deleted) {
        res.status(404).json({
            message: 'Employee not found'
        });
        return;
    }
    res.status(204).send();
}