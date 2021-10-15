import { DatabaseHelper, DatabaseI } from "../Export.Helper";
import { Sequelize } from 'sequelize';
export class DatabasePolimorfismo  extends DatabaseHelper implements DatabaseI {
    public DB_CONNECTION:any 
    public DB_HOST:string
    public DB_PORT:string
    public DB_DATABASE:string
    public DB_USERNAME:string
    public DB_PASSWORD:string
    public database:Sequelize;
    public objet:any
    constructor(  
        DB_CONNECTION:string,
        DB_HOST:string,
        DB_PORT:string,
        DB_DATABASE:string,
        DB_USERNAME:string,
        DB_PASSWORD:string,
     
        ){
        super()
       this.DB_CONNECTION = DB_CONNECTION
       this.DB_HOST = DB_HOST
       this.DB_PORT = DB_PORT
       this.DB_DATABASE = DB_DATABASE
       this.DB_USERNAME = DB_USERNAME
       this.DB_PASSWORD = DB_PASSWORD
    this.Connecter()
    this.database = this.Connecter()
    }


   Connecter(){
    
        return new Sequelize(this.DB_DATABASE,this.DB_USERNAME,this.DB_PASSWORD,{
            host:this.DB_HOST,
            dialect:this.DB_CONNECTION,
             pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

            define: {
                timestamps: false,
                freezeTableName: true,
                createdAt: false,
                updatedAt: false,
                
            },
            
        })
        
    }

    public async verificaconexion(){
        try {
       await this.conetion()
       this.database = this.Connecter()
       
    }  catch (error:any) {
        throw new Error(error)
    }
    }
    async  conetion(){ 
        try {
          await   this.Connecter().authenticate()
          console.log("Conexion")
        }  catch (error:any) {
            throw new Error(error)
        }
    }
    

}


