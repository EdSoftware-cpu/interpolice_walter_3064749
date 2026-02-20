// podemos posteriormente añadir async y await para el multi hilo (multitarea)

import { cnx } from "./conexionBD.js";

// Activamos el manejo de promesas en la conexión
const db = cnx.promise();

export const CiudadanoModel = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM ciudadano ORDER BY apellidos";
      db.query(sql)
        .then(([rows]) => resolve(rows))
        .catch((err) => reject(`Error en findAll: ${err.message}`));
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM ciudadano WHERE codigo = ?";
      db.query(sql, [id])
        .then(([rows]) => {
          // Si existe, enviamos el objeto; si no, null
          resolve(rows.length > 0 ? rows[0] : null);
        })
        .catch((err) => reject(`Error en findById(${id}): ${err.message}`));
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO ciudadano SET ?";
      db.query(sql, [data])
        .then(([result]) => {
          // Resolvemos con el ID generado y los datos originales
          resolve({ id: result.insertId, ...data });
        })
        .catch((err) => reject(`Error al crear ciudadano: ${err.message}`));
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
      db.query(sql, [data, id])
        .then(([result]) => {
          // Si afectó filas, la actualización fue exitosa
          resolve(result.affectedRows > 0);
        })
        .catch((err) => reject(`Error al actualizar ${id}: ${err.message}`));
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM ciudadano WHERE codigo = ?";
      db.query(sql, [id])
        .then(([result]) => {
          resolve(result.affectedRows > 0);
        })
        .catch((err) => reject(`Error al eliminar ${id}: ${err.message}`));
    });
  },
};
