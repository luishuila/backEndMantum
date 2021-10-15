import { Request, Response } from "express";
import { Controllers } from "../Helper/Export.Helper";
import fetch from 'cross-fetch';
import { AnimalModels, DescripcionModels, TipoAnimalModels } from "../model/Export.Models";
import { queryBuilder } from "../Database/Export.Database";

export class AnimalControllers implements  Controllers   {
    
    constructor() {
      
    }
    
    async index(req:Request, res:Response){
        const response = await DescripcionModels.findAll(
            {
                include: [
                    { model: AnimalModels, as: 'Animal' , include:[
                        { model: TipoAnimalModels, as: 'TipoAnimales' },
                    ] },
                 
                ]
            }
        );
        
        res.json(response)
      
            
    }
    async buscarquery(req:Request, res:Response){
        const {Fecha} = req.body
        const fech = "'"+Fecha+"'"
        const query = await queryBuilder.query(`
        SELECT tpm.tipoanimal,tpm.descripcion,an.animal, an.descripcion,dm.fechanaciomiento, COUNT(an.animal)as total 
        FROM tiposanimales as tpm 
        INNER JOIN animales as an on an.idtipoanimal = tpm.idtipoanimal 
        INNER JOIN animaldescripciones as dm on dm.idanimales = an.idanimales WHERE dm.fechanaciomiento > ${fech}
        GROUP BY an.animal;
        `)
    res.json(query)
    };


    async show(req:Request, res:Response)
    {

        // SELECT tpm.tipoanimal,tpm.descripcion,an.animal, an.descripcion,dm.fechanaciomiento, COUNT(an.animal)as total FROM tiposanimales as tpm 
        // INNER JOIN animales as an on an.idtipoanimal = tpm.idtipoanimal 
        // INNER JOIN animaldescripciones as dm on dm.idanimales = an.idanimales 
        // WHERE dm.fechanaciomiento> '2016-01-01' GROUP BY an.animal;
        }


    async creater(req:Request, res:Response){};
    async stores(req:Request, res:Response){
       
    }
    async update(req:Request, res:Response){};
    async delete(req:Request, res:Response){

    };
    
}