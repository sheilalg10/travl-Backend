import path from "path";
import fs from "fs";
import Users from "../interfaces/usersInterfaces";

const usersPath = path.join(__dirname, "..data/users.json");

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

