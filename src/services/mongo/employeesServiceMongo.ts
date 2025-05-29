import { Employees, IEmployee } from "../../models/employeesModel";

export const getEmployees = async () => {
    return await Employees.find();
};

export const getEmployee = async (id: string) => {
    return await Employees.findById(id);
}

export const addEmployee = async (data: IEmployee) => {
    const employee = new Employees(data);
    return await employee.save();
}

export const updateEmployee = async (id: string, data: Partial<IEmployee>) => {
    return await Employees.findByIdAndUpdate(id, data, {new: true});
}

export const deleteEmployee = async (id: string) => {
    return await Employees.findByIdAndDelete(id);
}