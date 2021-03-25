import express from "express";
import { Routes } from "./routes/routes";
import { sequelize } from "./database";

class App {
  public app: express.Application;
  public routeDef: Routes;

  constructor() {
    this.routeDef = new Routes();
    this.app = express();
    this.config();
    this.routeDef.routes(this.app);
  }

  private config(): void {

    sequelize.authenticate()
    
    .then(async() => {
      console.log("Connected to DB");
      try {
        await sequelize.sync({force: true})
      } catch (error) {
          console.log(error)
      }
    })

    .catch((e:any) => {
        console.log(e)
    });
  }
}

export default new App().app;