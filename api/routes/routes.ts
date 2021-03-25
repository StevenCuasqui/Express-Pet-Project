import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

export class Routes {
  public userController: UserController = new UserController();

  public routes(app:any): void {

    app.route("/user").get(this.userController.getAllUsers);
  }
}