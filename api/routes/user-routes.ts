import express, { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { IUser } from "../models/user.model";

const userController = new UserController()

export const userRoutes = express.Router()

userRoutes.route("/").get((req:Request,res:Response)=>{
    // extraccion de Body/Query params
    const usersReq = userController.getAllUsers().then((users)=>{
        res.json(users)
    })
    .catch((error)=>{
        res.status(500).send({message :"Unable to get Users", error: error})
    })
    
});

userRoutes.route("/").post((req:Request,res:Response)=>{
    const params = req.body

    //Validacion antes de crear objeto// Adapter?
    const firstName = params.firstName;
    const lastName = params.lastName;
    const email = params.email;
    const password = params.password;

    console.log(params)

    const newUser:IUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    userController.createUser(newUser).then((user)=>{
        res.json({message: "User successfully created!", user:user})
    })
    .catch((error)=>{
        res.status(500).send({message :"User couldn't be created!", error: error})
    })
});