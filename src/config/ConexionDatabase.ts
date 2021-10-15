
import { DatabaseI } from '../Helper/Export.Helper';

///*  'mysql' | 'mariadb' | 'postgres' | 'mssql'  | 'sqlite'*/
export const  mysql:DatabaseI  ={

        DB_CONNECTION : process.env.MYSQL_DB_CONNECTION || "mysql",
        DB_HOST : process.env.MYSQL_DB_HOST || "127.0.0.1",
        DB_PORT : process.env.MYSQL_DB_PORT || "3306",
        DB_DATABASE : process.env.MYSQL_DB_DATABASE || "exampleAnimales",
        DB_USERNAME : process.env.MYSQL_DB_USERNAME || "root",
        DB_PASSWORD : process.env.MYSQL_DB_PASSWORD || ""
}
  

export const  sqlServer:DatabaseI    ={
        DB_CONNECTION : process.env.SQLSERVER_DB_CONNECTION || "mssql",
        DB_HOST : process.env.SQLSERVER_DB_HOST ||"",
        DB_PORT : process.env.SQLSERVER_DB_PORT || "",
        DB_DATABASE : process.env.SQLSERVER_DB_DATABASE || "",
        DB_USERNAME : process.env.SQLSERVER_DB_USERNAME || "",
        DB_PASSWORD : process.env.SQLSERVER_DB_PASSWORD || ""
}
  


