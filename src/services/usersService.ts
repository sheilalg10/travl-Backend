import path from "path";
import fs from "fs";
import Users from "../interfaces/usersInterfaces";

const usersPath = path.join(__dirname, "../data/users.json");

function readUsers(): Users[] {
    const jsonData = fs.readFileSync(usersPath, "utf-8");
    return JSON.parse(jsonData);
}

function writeUsers(users: Users[]): void {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), "utf-8");
}

export const fetchAllUsers = (): Users[] => {
    return readUsers();
}

export const fetchUserById = (id: string): Users | undefined => {
    return readUsers().find((user) => user.id === id);
}

export const addUser = (user: Users): Users => {
    const users = readUsers();
    users.push(user);
    writeUsers(users);
    return user;
}

export const updateUser = (id: string, updatedData: Partial<Users>): Users | null => {
    const users = readUsers();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    const updatedUser = { ...users[index], ...updatedData};
    users[index] = updatedUser;
    writeUsers(users);
    return updatedUser;
}

export const deleteUser = (id: string): boolean => {
    const users = readUsers();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    writeUsers(users);
    return true;
}