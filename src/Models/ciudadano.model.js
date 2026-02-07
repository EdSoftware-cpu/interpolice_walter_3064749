//capa modelo para el modulo ciudadanos interpolice

// importamos la conexion

import { cnx } from "./conexionBD.js";

// activar el manejo de promesas (asincronica)

const db = cnx.promise();

// creamos el modulo:: usando el concepto orientado a objetos
//  clase correspondiente a modelo ciudadanos

export const CiudadanoModel = {
  // LISTAR TODOS : usamos funciones asincroicas para aprovechar
  // las promesas (los hilos de ejecucion)

  findAll: async () => {
    const sql = "SELECT * FROM ciudadano ORDER BY apellidos";

    // almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql);

    return rows;
  },
  // buscar por id recibe el id como paramentro
  findById: async (id) => {
    const sql = "SELECT * FROM ciudadano WHERE codigo=?";
    // almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);

    return rows;
  },
  // borramos tenindo en cuenta el id que llega del controlador por parametor
  delete: async (id) => {
    const sql = "DELETE  FROM ciudadano WHERE codigo=?";
    // almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);

    return rows;
  },
  create: async (data, id) => {
    const sql = "INSERT INTO ciudadano SET ?";
    // almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data]);

    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE ciudadano SET ? WHERE codigo=?";
    // almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data, id]);

    return rows;
  },
};
