// *modulo CRUD usuarios
// TODO: Aqui la lirerias
import express from "express";
import { cnx } from "./conexionBD.js";
// *crud basico ciudadanos
export const usuario = express();

// *listar  todos los Usuarios
usuario.get("/usuario/listartodos", (req, res) => {
  //* hacer la consulta
  let sql = "SELECT*FROM usuario ORDER BY apellidos ASC";
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    res.send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region listar un solo usuario
usuario.get("/usuario/listarporid/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta
  let id = req.params.id;
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "SELECT*FROM usuario WHERE id=?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region Borrar reistro -- borrado real
usuario.delete("/usuario/borrarporid/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta
  let id = req.params.id;
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "DELETE FROM usuario WHERE id=?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region Crear ciudadanos
usuario.post("/usuario/crear", (req, res) => {
  // *recibimos el parametro dentro de la consulta payload - body en un objeto JS
  let datosForm = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    pass: req.body.pass,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  console.log(datosForm);
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "INSERT INTO usuario SET ?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [datosForm], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
// #region editar ciudadano
usuario.put("/usuario/editar/:id", (req, res) => {
  // *recibimos el parametro dentro de la consulta payload - body en un objeto JS
  let id = req.params.id;
  let datosForm = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    pass: req.body.pass,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  console.log(datosForm);
  //* hacer la consulta por seguridad usar consultas parametrizadas
  let sql = "UPDATE usuario SET ? WHERE id = ?";
  // let sql2 = "SELECT*FROM ciudadano WHERE id=${id}"; de esta forma da pie a sql injection
  // * ejecutar la consulta en la base de datos
  cnx.query(sql, [datosForm, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
  //* devolver la data en formato JSON
});
// #endregion
