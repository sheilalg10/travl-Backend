import { Request, Response } from "express";
import { addEmployee, deleteEmployee, fetchAllEmployees, fetchEmployeeById, updateEmployee } from "../services/employeesService"
import Employees from "../interfaces/employeesInterface";

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Obtener lista de empleados
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */

// GET /employees - Obtener todas los empleados
export const getAllEmployees = (req: Request, res: Response): void => {
    const employees = fetchAllEmployees();
    res.json(employees);
}

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Empleado no encontrada
 */

// GET /rooms/:id - Obtener un empleado por ID
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

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Datos inválidos
 */

// POST /employees - Crear un nuevo empleado
export const createEmployee = (req: Request, res: Response): void => {
    const newEmployee: Employees = req.body;
    const createsEmployee = addEmployee(newEmployee);
    res.status(201).json(createsEmployee);
}

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Actualizar un empleado por ID
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Empleado no encontrado
 */

// PUT /employees/:id - Actualizar un empleado
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

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Eliminar un empleado por ID
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     responses:
 *       204:
 *         description: Empleado eliminado exitosamente
 *       404:
 *         description: Empleado no encontrado
 */

// DELETE /employees/:id - Eliminar un empleado
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