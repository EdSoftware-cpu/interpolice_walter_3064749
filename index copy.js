//* este proyecto consiste en una API REST: GET, POST, PUT, DELETE => Lireria express
// * LIBRERIAS
//* importamos la libreria express

import express, { json } from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadanos.js";
import { usuario } from "./modules/usuarios.js";
// * instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json()); //serializa y deserializa las peticiones
app.use(cors());
const port = 3000;
// * primer recurso o endpoint
app.use(cors()).get("/", (req, res) => {
  res.status(200).send("api encendida");
});

app.use("/api", ciudadano);
app.use("/", usuario);
// * esto significa: encendemos el servio o prendemos la API
app.listen(port, () => {
  console.log(`servidor corriendo en: ${port}`);
});
