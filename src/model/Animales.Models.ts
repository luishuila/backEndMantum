import {  DataTypes, ModelDefined } from "sequelize";
import { ConexionDatabaseMySql } from "../Database/Export.Database";
import { TB_Animal, TB_TiposAnimales } from '../Database/Tablas/Name.Tabla';
import { Models } from '../Helper/Export.Helper';



export class AnimalModels  extends ConexionDatabaseMySql implements Models {
    
    public Tabla:string = TB_Animal
    
    constructor(){
        super()
        this.AnimalModels()
      
    }
    
    AnimalModels(){ 
        return  this.db.define (this.Tabla,
            {
                idanimales: {
                    type: DataTypes.INTEGER,
                    autoIncrement:true,
                    primaryKey:true,
                },
                animal:{
                    type:DataTypes.STRING,
                    unique: true,
                },
                descripcion:{
                    type: DataTypes.TEXT,
                },
                idtipoanimal:{
                    type: DataTypes.INTEGER,
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                    references: {model:TB_TiposAnimales, key:"idtipoanimal"}
                },
                createdAt: DataTypes.DATE,
                updatedAt:DataTypes.DATE,
            }  
            )
    }


  async  createTable(){
      await this.db.sync({ force: true })
    }
}


export const AnimalModel = new AnimalModels().AnimalModels()