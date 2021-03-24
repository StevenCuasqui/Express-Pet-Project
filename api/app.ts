import express from "express";
import { Routes } from "./routes/routes";
import { sequelize } from "./models";

class App {
  public app: express.Application;
  public routeDef: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routeDef.routes(this.app);
  }

  private config(): void {

    sequelize.authenticate().then(async() => {

      console.log("Connected to DB");
      try {
          await sequelize.sync({force: true})
      } catch (error) {
          console.log(error)
      }
    })
    .catch(() => {
        throw "error";
    });
  }
}

export default new App().app;