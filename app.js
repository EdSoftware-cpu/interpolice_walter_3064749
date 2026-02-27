//* este proyecto consiste en una API REST: GET, POST, PUT, DELETE => Lireria express
// * LIBRERIAS
//* importamos la libreria express

import express, { json } from "express";
import cors from "cors";
import CiudadanoRutas from "./src/routes/ciudadano.route.js";
import usuarioRutas from "./src/routes/usuario.route.js";

// * instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json()); //serializa y deserializa las peticiones
app.use(cors());
const port = 3000;
// * primer recurso o endpoint
// MIddlewares
app.use("/api", CiudadanoRutas);
app.use("/api", usuarioRutas);

export default app;
