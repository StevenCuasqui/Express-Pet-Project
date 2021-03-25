import { Request, Response, urlencoded, json } from "express";
import { UserController } from "../controllers/user.controller";

export class Routes {
  //controller también pasa al rutasUsuario
  public userController: UserController = new UserController();

  public routes(app:any): void {
    app.use(json()); // support json encoded bodies
    app.use(urlencoded({ extended: true })); // support encoded bodies

    //Definir Rutas de Usuario en archivo "rutasUsuario"
    app.route("/user").get((req:Request,res:Response)=>this.userController.getAllUsers(req,res));
    app.route("/user").post((req:Request,res:Response)=>this.userController.createUser(req,res));
  }
}