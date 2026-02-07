// las rutas del modulo ciudadano

import { Router } from "express";

// IMPORTAMOS LA LOGICA DEL CONTROLADOR
// PARA CONSTRUIR CADA INTERACCION DE LA RUTA
// GET, POST, PUT, DELETE.

import * as CiudadanoCtr from "../controllers/ciudadano.controller.js";

// instanciamos el metodo router del express para poder crear las rutas

const router = Router();

// las rutas del modulo
// ruta para listar todos

router.get("/ciudadano/listartodos", CiudadanoCtr.getCiudadanos);

router.get("/ciudadano/listarporid/:id", CiudadanoCtr.getCiudadanoById);

router.post("/ciudadano/crearciudadano", CiudadanoCtr.CreateCiudadano);

router.delete("/ciudadano/eliminarciudadano/:id", CiudadanoCtr.deleteCiudadano);

router.put("/ciudadano/updateciudadano/:id", CiudadanoCtr.UpdateCiudadano);

export default router;
