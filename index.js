// creo una cosntante cn el puerto local o el asignado en
// las variables globales de la aplicacion

import app from "./app.js";

const port = 3000 || process.env.PORT;
// * esto significa: encendemos el servio o prendemos la API
app.listen(port, () => {
  console.log(`servidor corriendo en: ${port}`);
});
