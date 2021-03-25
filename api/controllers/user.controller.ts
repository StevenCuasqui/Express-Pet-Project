import e, { Request, Response } from "express";
import User from "../models/user.model";
// Supertest para Integracion Test
//Logica de Negocio aquí -> Separar en capa "Interaccion/Conexion con la BD"

export class UserController {
  public async getAllUsers(req: Request, res: Response) {
    const users = await User.findAll()
    res.json(users)
  }

  public async createUser(req:Request, res: Response){
    const params = req.body
    const firstName = params.firstName;
    const lastName = params.lastName;
    const email = params.email;
    const password = params.password;

    console.log(params)

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    const newUser = await User.create(user)

    res.json({
      message: "Usuario creado con éxito!",
      user: newUser
    })
  }
}