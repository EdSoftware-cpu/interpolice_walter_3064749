// * modulo para conexion a base de datos local
// #region Modulo de conexion a la basede datos local
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
let cnx;
try {
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
  });
  const conexion = await cnx.getConnection();
  conexion.release();
  //   console.log(`conexion exitosa`);
} catch (error) {
  console.error(`A ocurrido un error en la conexion : ${error.massage}`);
}
export const db =cnx;
// #endregion
