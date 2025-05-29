import { IEmployee } from "../../models/employeesModel";
import { addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../../services/mongo/employeesServiceMongo"

export const allEmployees = async () => {
    return await getEmployees();
}

export const oneEmployee = async (id: string) => {
    return await getEmployee(id);
}

export const createEmployee = async (data: IEmployee) => {
    return await addEmployee(data);
}

export const updateEmployeeById = async (id: string, data: Partial<IEmployee>) => {
    return await updateEmployee(id, data);
}

export const deleteEmployeeById = async (id: string) => {
    return await deleteEmployee(id);
}