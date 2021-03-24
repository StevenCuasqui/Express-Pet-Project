import { Request, Response } from "express";

export class UserController {
  public getUser(req: Request, res: Response) {
    res.json({
      message: "User Controller",
    });
  }
}