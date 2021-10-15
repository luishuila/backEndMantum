import {  DataTypes, ModelDefined } from "sequelize";
import { ConexionDatabaseMySql } from "../Database/Export.Database";
import { TB_TiposAnimales } from "../Database/Tablas/Name.Tabla";
import { Models } from "../Helper/Export.Helper";



export class TipoAnimalModels  extends ConexionDatabaseMySql implements Models {
    
   public Tabla:string = TB_TiposAnimales
    
    constructor(){
        super()
        this.TiponimalModels()
        
    }
    
    TiponimalModels(){ 
        return  this.db.define (this.Tabla,
            {
                idtipoanimal: {
                    type: DataTypes.INTEGER,
                    autoIncrement:true,
                    primaryKey:true,
                },
                tipoanimal:{
                    type:DataTypes.STRING,
                    unique: true  
                },
                descripcion:{
                    type: DataTypes.TEXT,
                },
                createdAt: DataTypes.DATE,
                updatedAt:DataTypes.DATE,
                }
             
             )
             //,{ timestamps: true })
    }


 async   createTable(){
    await  this.db.sync({ force: true }) 
    }

}


export const TipoAnimalModel = new TipoAnimalModels().TiponimalModels()
