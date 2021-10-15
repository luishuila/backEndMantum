import { Request, Response } from "express";
export interface    ControllersHelper  {
      index(req:Request, res:Response):void;
      creater(req:Request, res:Response):void;
      stores(req:Request, res:Response):void;
      update(req:Request, res:Response):void;
      delete(req:Request, res:Response):void;
      show(req:Request, res:Response):void;
}