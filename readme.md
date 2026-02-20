<!-- historial de lo que ocurra durante el proyecto -->
# BITACORA DEL PROYECTO

# HERRAMIENTAS BACK

gestor: mysql - MariaDB 
sitio official : https://mariadb.org/

express : framework de Node js => gestionar APIS usando protocolo http
node js: js standalone - instalado en mi pc --> en consola: node -v
nodemon: plugin para usar en desarrollo - no se usa en produccion
mysql2: Plugin para gestionar interacciones con la bd - orm (sqlite)
cors: paara la gestion de CORS (cros origin resource sharing)
env: variables globales del proyecto (correlaciones, rutas)

# HERRAMIENTAS FRONT

CSS: Framework Bootstrap
BUNDLER: Vite -(WebPAck)
Vanilla js

## PASO A PASO BACKEND

-iniciar el proyecto con Node js -npm init
-instalar los paquetes requridos -npm install nodemon mysql2 cors env express
-configuar el control de versiones del codigo: crear el .gitignore
-iniciar el seguimiento del repositorio: git init, git add .
-creamos el repositorio en la nube: github
-conectamos el repostorio de la nube con el repositorio local:
git remote add origin https://github.com/EdSoftware-cpu/interpolice_walter_3064749.git
-hacemos la primer actualizacion local y remota:
local: git commit . -m "inicio del proyecto"
remota: git push -u origin master
-revision del package json: verificamos las dependencias
-modficamos el packae json para ejecucion del proyecto:
"start": "node index.js", este es modo produccion/depliegue
"dev": "nodemon index.js", este es modo desarrollo o development 

## CODIFICACION DEL PROYECTO

-crear el archivo principal: index.js
-configurar los plugins: nodemon, cors, hacer la primer prueba
nmp run dev(Modo Desarrollador), npm start(Modo Produccion)

## creacion del modulo conexion a base de datos

-imprtamos la libreria mysql2 y hacemos la conexion deacuerdo al codigo

## CODDIFICACION DEL MODULO CIUDADANOS

### IMPLEMATACION DE ARQUITECTURA DE SOFTWARE POR CAPAS (N-TIER)
CONROLLER: Controlador de modulo, maneja la logica de peticiones y respuestas
ROUTES: Se encarga de construir los EndPoints o rutas de la API en ella podemos inyectar los Middlewares
MODELS: se encarga de la interecion(Consultas) con el SGBD, implementa la logica del negocio 

CAPAS DE SOPORTE
MIDDLEWARE: Capa intemedia entre el cliente y la API(ejemplo: Valiar tokens, Validar ip por cors)
HELPERS: Ayudas, ayudantes, es decir clases o funciones reusables del sistema por ejemplo:
 un sistema de errores

 ## CONFIGUARACION DE VARIABLES DE ENTORNO / GLOBALES
 
 Sirven para mejorar la confidencialidad, mejor mantenibilida
 en node.js : variables .env
 instalar paquete dotenv y confiuararlo (node.js y lo implementa nativo)
 - npm i dotenv
- crear un archivo .env en la carpeta raiz del proyecto
- Ver el ejemplo de archivo .env (recuerde crear estilo constantes)
