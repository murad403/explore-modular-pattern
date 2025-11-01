import { FilterQuery } from "mongoose";
import TUser from "./user.interface.js";
import User from "./user.model.js"

const createUserIntoDB = async(payload: TUser) =>{
    const existingUser = await User.findOne({email: payload.email});
    if(existingUser){
        throw new Error("User already exists");
    }
    const result = new User(payload);
    await result.save();
    return result;
}

export const UserServices = {
    createUserIntoDB
}