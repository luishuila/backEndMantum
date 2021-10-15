import {  DataTypes, ModelDefined } from "sequelize";
import { ConexionDatabaseMySql } from "../Database/Export.Database";
import { TB_Animal, TB_AnimalDescripciones } from "../Database/Tablas/Name.Tabla";
import { Models } from '../Helper/Export.Helper';



export class  DescripcionModels  extends ConexionDatabaseMySql implements Models {
    
    public Tabla:string = TB_AnimalDescripciones
    
    constructor(){
        super()
        this.DescripcionModels()
     
    }
    
    DescripcionModels(){ 
        return  this.db.define (this.Tabla,
            {
                iddescripcion: {
                    type: DataTypes.INTEGER,
                    autoIncrement:true,
                    primaryKey:true,
                },
                nombre:{
                    type:DataTypes.STRING
                },
                fechanaciomiento:{
                    type:DataTypes.DATE
                },
                descripcion:{
                    type: DataTypes.TEXT,
                },
                sexo:{
                    type: DataTypes.CHAR,
                },
                idanimales:{
                    type: DataTypes.INTEGER,
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                    references: {model:TB_Animal, key:"idanimales"}
                },
                createdAt: DataTypes.DATE,
                updatedAt:DataTypes.DATE,
            }  
        )
    }


  async  createTable(){
     await  this.db.sync({ force: true })  
    }
}

export const DescripcionModel = new DescripcionModels().DescripcionModels()