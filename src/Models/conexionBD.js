// * modulo para conexion a base de datos local
// #region Modulo de conexion a la basede datos local
import mysql from "mysql2";
let cnx;
try {
  cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "interpolice_bd",
    port: "3306",
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
  });
  //   console.log(`conexion exitosa`);
} catch (error) {
  console.log(`A ocurrido un error en la conexion : ${error.massage}`);
}
export { cnx };
// #endregion
