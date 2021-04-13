import { Request, Response, urlencoded, json } from "express";
import { userRoutes } from "./user-routes";

export class Routes {

  public routes(app:any): void {
    app.use(json()); // support json encoded bodies
    app.use(urlencoded({ extended: true })); // support encoded bodies

    
    app.route("/").get((req:Request,res:Response)=>{
      res.send({ message: 'Api root'})
    })

    app.use("/user", userRoutes)
  }
}
