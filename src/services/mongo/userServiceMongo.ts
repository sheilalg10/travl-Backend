import { IUser, User } from "../../models/usersModel"

export const getUsers = async () => {
    return await User.find();
}

export const getUser = async (id: string) => {
    return await User.findById(id);
}

export const addUser = async (data: IUser) => {
    const user = new User(data);
    return await user.save();
}

export const updateUser = async (id: string, data: Partial<IUser>) => {
    return await User.findByIdAndUpdate(id, data, {new: true});
}

export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
}