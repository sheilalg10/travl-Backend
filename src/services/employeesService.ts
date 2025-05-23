import path from "path";
import fs from "fs";
import Employees from "../interfaces/employeesInterface";

const employeesPath = path.join(__dirname, "../data/employees.json");

function readEmployees(): Employees[] {
    const jsonData = fs.readFileSync(employeesPath, "utf-8");
    return JSON.parse(jsonData);
}

function writeEmployees(employees: Employees[]): void {
    fs.writeFileSync(employeesPath, JSON.stringify(employees, null, 2), "utf-8");
}

// GET all
export const fetchAllEmployees = (): Employees[] => {
    return readEmployees();
}

// GET by ID
export const fetchEmployeeById = (id: string): Employees | undefined =>{
    return readEmployees().find((emmployee) => emmployee.id === id);
}

// POST
export const addEmployee = (employee: Employees): Employees => {
    const employees = readEmployees();
    employees.push(employee);
    writeEmployees(employees);
    return employee;
};

// PUT
export const updateEmployee = (id: string, updateData: Partial<Employees>): Employees | null => {
    const employees = readEmployees();
    const index = employees.findIndex((e) => e.id === id);
    if(index === 1) return null;

    const updatedEmployee = { ...employees[index], ...updateData };
    employees[index] = updatedEmployee;
    writeEmployees(employees);
    return updatedEmployee;
}

// DELETE
export const deleteEmployee = (id: string): boolean => {
    const employees = readEmployees();
    const index = employees.findIndex((e) => e.id === id);
    if (index === -1) return false;

    employees.splice(index, 1);
    writeEmployees(employees);
    return true;
}