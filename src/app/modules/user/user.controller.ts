import { Request, Response } from "express";
import { UserServices } from "./user.service.js";

const createUser = async(req: Request, res: Response) =>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUserIntoDB(newUser);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const UserControllers = {
    createUser,
}