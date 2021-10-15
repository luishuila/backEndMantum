import { Request, Response } from "express";
import { Controllers } from "../Helper/Export.Helper";
import fetch from 'cross-fetch';

export class MyttcControllers implements  Controllers   {
    
    constructor() {
      
    }
    
    async index(req:Request, res:Response){
        const response = await fetch('https://myttc.ca/finch_station.json');
        const {stops} = await response.json();
        res.json(stops)
      
            
    }
    async show(req:Request, res:Response)
    {
    }
    async creater(req:Request, res:Response){};
    async stores(req:Request, res:Response){};
    async update(req:Request, res:Response){};
    async delete(req:Request, res:Response){};
    
}