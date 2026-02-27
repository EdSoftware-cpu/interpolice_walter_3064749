// las rutas del modulo usuario

import { Router } from "express";

// IMPORTAMOS LA LOGICA DEL CONTROLADOR
// PARA CONSTRUIR CADA INTERACCION DE LA RUTA
// GET, POST, PUT, DELETE.

import * as usuarioContr from "../controllers/usuario.controller.js";

// instanciamos el metodo router del express para poder crear las rutas

const router = Router();

// las rutas del modulo
// ruta para listar todos

router.get("/usuario/listartodos", usuarioContr.getUsuario);

router.get("/usuario/listarporid/:id", usuarioContr.getUsuarioById);

router.post("/usuario/crearusuario", usuarioContr.CreateUsuario);

router.delete("/usuario/eliminarusuario/:id", usuarioContr.deleteUsuario);

router.put("/usuario/updateusuario/:id", usuarioContr.UpdateUsuario);

export default router;
