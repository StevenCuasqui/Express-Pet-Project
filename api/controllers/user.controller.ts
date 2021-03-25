import { Request, Response } from "express";

export class UserController {
  public getAllUsers(req: Request, res: Response) {
    res.json({
      message: "User Controller",
    });
  }
}