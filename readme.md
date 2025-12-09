<!-- historial de lo que ocurra durante el proyecto -->
## BITACORA DEL PROYECTO

## HERRAMIENTAS BACK

gestor: mysql - MariaDB 
sitio official : https://mariadb.org/

express : framework de Node js => gestionar APIS usando protocolo http
node js: js standalone - instalado en mi pc --> en consola: node -v
nodemon: plugin para usar en desarrollo - no se usa en produccion
mysql2: Plugin para gestionar interacciones con la bd - orm (sqlite)
cors: paara la gestion de CORS (cros origin resource sharing)
env: variables globales del proyecto (correlaciones, rutas)

## HERRAMIENTAS FRONT

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
remota: git push -u origin main