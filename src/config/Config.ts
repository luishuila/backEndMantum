
import { ExpressServices } from '../Services/Express.Services';
import cors from 'cors';
import { rutas } from '../Router/Router.Router';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { AnimalModels } from '../model/Animales.Models';
import { TipoAnimalModels } from '../model/TipoAnimales.Models';
import { DescripcionModels } from '../model/AnimalDescripciones.Models';
import { AnimalesSeeds } from '../Database/seeds/Animales.seeds';


export class Config extends ExpressServices {
 
    constructor(){
       super()       
       this.Middleware()
       this.router()
   }
   router(){
     
        this.app.use(`/api`,rutas)
   }
   Middleware(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(cors())
   }

 

   

}


export class importar{
   async Modelos(){
      await  new TipoAnimalModels().createTable()
      await  new AnimalModels().createTable()
    await  new DescripcionModels().createTable()
   

 }
   async seeds(){
      await new AnimalesSeeds()
   }
} 