import { Database, DatabaseI } from "../Helper/Export.Helper";
import { Sequelize } from 'sequelize';
import { mysql } from '../config/ConexionDatabase';


export class ConexionDatabaseMySql implements DatabaseI  {
    
    DB_CONNECTION   =     mysql.DB_CONNECTION
    DB_HOST         =     mysql.DB_HOST
    DB_PORT         =     mysql.DB_PORT
    DB_DATABASE     =     mysql.DB_DATABASE
    DB_USERNAME     =     mysql.DB_USERNAME
    DB_PASSWORD     =     mysql.DB_PASSWORD

   public db:Sequelize ;
   public connect:any ;
   
    constructor(){ 
        this.connect  =   new Database(this.DB_CONNECTION,this.DB_HOST,this.DB_PORT,this.DB_DATABASE,this.DB_USERNAME,this.DB_PASSWORD );       
        this.db = this.connect.database
    
    }


   
} 

