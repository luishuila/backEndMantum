import dotenv from "dotenv";
import { Config, importar } from './config/Config';
import * as yargs from "yargs";


export class App {
  constructor() {
    const args = yargs
      .option({
        s: {  type: "string" },
        t: {  type: "string" },
      }).argv


    const comando: any = args;
   
    if (comando.s == "seeds") {
        new importar().seeds()
    } else if (comando.t == "tabla") {
        new importar().Modelos()
    } else {
      dotenv.config();
      new Config();
    }
  }
}
