// * modulo para maniplacion del usuario
// #region Listar todos los cidadanos
//TODO: LIBRERIAS
import express from "express";
import { cnx } from "./conexionBD.js";
// *crud basico ciudadanos
export const ciudadano = express();

// *listar  todos los ciudadanos
ciudadano.get("/ciudadano/listartodos", (req, res) => {
  //* hacer la consulta
  let sql = "SELECT*FROM ciudadano ORDER BY apellidos";
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region listar un ciudadano solo
ciudadano.get("/ciudadano/listarporid/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta
  let id = req.params.id;
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "SELECT*FROM ciudadano WHERE codigo=?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region Borrar reistro -- borrado real
ciudadano.delete("/ciudadano/borrarporid/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta
  let id = req.params.id;
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "DELETE FROM ciudadano WHERE codigo=?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region Crear ciudadanos
ciudadano.post("/ciudadano/crear", (req, res) => {
  // *recibimos el parametro dentro de la consulta payload - body en un objeto JS
  let datosForm = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    planeta_origen: req.body.planeta_origen,
    planeta_residencia: req.body.planeta_residencia,
    foto: req.body.foto,
    codio_qr: req.body.codio_qr,
    estado: req.body.estado,
  };
  console.log(datosForm);
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "INSERT INTO ciudadano SET ?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [datosForm], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region editar ciudadano
ciudadano.put("/ciudadano/editar/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta payload - body en un objeto JS
  let id = req.params.id;
  let datosForm = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    planeta_origen: req.body.planeta_origen,
    planeta_residencia: req.body.planeta_residencia,
    foto: req.body.foto,
    codio_qr: req.body.codio_qr,
    estado: req.body.estado,
  };
  console.log(datosForm);
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [datosForm, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
