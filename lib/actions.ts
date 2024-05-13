"use server"

import { connectToDb } from "./connection";
import User from "./user";


export const fetchUser = async (id: string) => {
  try {
    connectToDb();
    const user = User.findById({ _id: id});
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
}

export const fetchUsers = async () => {
  try {
    connectToDb();
    const users = User.find();
    return users;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
}

export const fetchUserIds = async () => {
  try {
    await connectToDb();
    const ids = await User.find({}, '_id').lean();
    return ids.map(doc => (doc as any)._id.toString()); 
  } catch(err) {
    console.error("Failed to fetch IDs:", err);
    return []; 
  }
};

export const addUser = async (formData: FormData) => {
  const { name } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const user = await User.create({ username: name });
  } catch(err) {
    console.log(err);
  }
}