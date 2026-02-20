// creo una cosntante cn el puerto local o el asignado en
// las variables globales de la aplicacion

import app from "./app.js";
// require('dotenv').config()
const port = process.env.APP_PORT || 3000 ;
// * esto significa: encendemos el servio o prendemos la API
app.listen(port, () => {
  console.log(`servidor corriendo en: ${port}`);
  console.log(process.env); //todas la variables de entorno de node
  console.log(process.env.OS); // sistema operativo en que se ejecta node
  console.log(process.env.NUMBER_OF_PROCESSORS); //numero de procesadores
  console.log(process.env.NODE); //ruta dende esta instalado node
  console.log(process.env.COMPUTERNAME); //nombre del servidor
  console.log(process.env.HOST); //variable de usuario creada en el .env
  console.log(process.env.DB_BASE); //variable de usuario creada en el .env
});
