import { ConexionDatabaseMySql } from "./Conexion.Database";

export  {ConexionDatabaseMySql}

const sqlmysql = new  ConexionDatabaseMySql()
export const queryBuilder = sqlmysql.db




