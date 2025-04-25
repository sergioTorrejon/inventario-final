# Sistema de Cartas de Resoluciones
# Sistema Resoluciones

## Requisitos

* Sistema Operativo Debian 10
* node ..........
* PostgreSQl v13 o superior

## Repositorios 

Editar el archivo de configuración de los repositorios de Debian 10
```
nano /etc/apt/sources.list
```

Adicionar el siguiente contenido
```
deb http://deb.debian.org/debian          buster         main
deb http://security.debian.org/debian-security buster/updates main
```

Actualizando los repositorios
```
apt update
```

## Instalación

Instalando paquetes comunes 
```
apt install wget apt-transport-https
```

**nodejs v16.3**

instalación de NodeJS

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Instalar postgreSql

**PostgreSQL**

```
apt install postgresql
```
Instalar Nginx

**Nginx**

```
apt install nginx
```

## Configuración


**Base de Datos**

En el servidor crear la base de datos y el usuario para la aplicación
dentro de la Carpeta BD Backup se encuentran dos Backup de la Base de Datos en Formato Postgres 12 o BINARIO utilizar uno de los 2

Nombre de la Base de Datos : DB_DOCUMENTOS

```
sudo su - postgres
psql

CREATE DATABASE DB_NAME;
CREATE USER 'USERNAME' WITH PASSWORD '<PASSWORD>' INHERIT;
GRANT ALL PRIVILEGES ON DATABASE DB_NAME to [USERNAME];
quit
```

Adicionar los permisos de acceso para el usuario creado
```
nano /etc/postgresql/13/main/pg_hba.conf

# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             USERNAME        localhost   	          md5
```

Para que PostgreSQL reconozca la nueva politica de seguridad del usuario creado, es recargar la configuración
```
sudo su - postgres
psql
SELECT pg_reload_conf();
```

Restaurar la base de datos

```
pg_restore -i -h localhost -p 5432 -U postgres -d 'DB_NAME' -v "/var/www/sireci/bd/dump-db_documentos-202112161459.backup"
```

**Frontend/Backend**

El frontend y el backend de la aplicación deben estar alojados dentro de la carpeta `/var/www/sireci`
```
mkdir -p /var/www/sireci
```

el contenido de la carpeta es lo siguiente:
```
/var/www/sireci/
├── api
├── app
└── bd
```

- api: Contiene el Backend del sistema
- app: Contiene el Frontend del Sistema
- bd: Contiene el backup de la BD a importar



Por seguridad las aplicaciones nunca, deberan ejecutarse con el usuario ROOT, por lo tanto se va a crear el usuario especifico **sireci**
```
sudo useradd sireci -d /var/www/sireci -M -r -s "$(which bash)"
sudo chown -R sireci:sireci /var/www/sireci
```
## Compilación

...
```

```


## Ejecutar la aplicación en modo desarrollo

```
cd api
node index.js
```

# Producción


## Ejecución de la aplicación para producción con PM2

Instalación

Para instalar pm2 realizarlo con un usuario con permisos de administrador(SUDO) y no con el usuario creado **sireci**
```
sudo npm install -g pm2
```

Iniciar el proceso:
```
sudo su - sireci
cd api/
pm2 start index.js --name "api"
```
Verificar que la aplicación se encuentre corriendo:
```
pm2 status
```
┌─────┬─────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name    │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ main    │ default     │ 0.0.1   │ fork    │ 152749   │ 6h     │ 5295 │ online    │ 0%       │ 105.2mb  │ sireci   │ disabled │
└─────┴─────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘


**Nginx**


Nginx se utiliza como un servidor proxy, es decir realiza un puente del puerto 80 al puerto 5000 de kestrel

La configuración , es la siguiente:
```
/etc/nginx/sites-available/default
```

El contenido del archivo es:
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/sireci/app;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                try_files $uri $uri/ /index.html;
                proxy_read_timeout 300s;
                proxy_connect_timeout 75s;
        }

        location ~ ^/lgift(.*)$  {
			rewrite ^/lgift/(.*) /$1 break;
			proxy_pass http://localhost:5000;

			proxy_connect_timeout 1;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_set_header X-Forwarded-Proto https;
			proxy_cookie_path / "/; httponly; secure; SameSite=Lax";
		}
}
```

Donde 
```
location /
```
Hace referencia a la raíz `http://IP_SERVIDOR/` del servidor que apunta directamente al archivo `index.html` que esta alojado en `/var/www/sireci/app`

```
location /api
```
Hace referencia a `http://IP_SERVIDOR/api` que hace un puente al servicio de kestrel `http://localhost:5000`


Para que los cambios surtan efecto, reiniciar el servicio
```
systemctl restart nginx
```

Si la configuración es correcta, ingresar al navegador web y acceder al servicio
```
http://IP_SERVIDOR
http://IP_SERVIDOR/api
```

## CONFIGURACIONES

## Configuración del BackEnd

Para configurar la base de datos abrir el archivo appsetting.json y editar el parametro ConnectionStrings con los parametros al crear la base de datos Postgres

```
  "ConnectionStrings": {
    "Default": "Server=192.168.57.181;Port=5432;Database=anexos_lgi_ft;User Id=storrejon;Password=storrejon2019;"
  },
```

## Configuracion del FrontEnd

Para comunicar el FrontEnd con el sistema de autenticacion y el Backend abrir el archivo main.js ubicado en la carpeta app, editar las lineas 242 al 245

```
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Globals": () => (/* binding */ Globals)
/* harmony export */ });
const Globals = Object.freeze({
    api: 'http://192.168.57.139/lgift/api', 
    token: {
        app: 'f3e615c4-01ad-47fc-bd4e-97de0e1ba861',
        api: 'http://192.168.57.180:8085/authv2/api/v2/token'
    }
});
```

Los parámetros que se debe configurar son los siguientes:

La Url donde se encuentra el api (BackEnd)
```
 api: 'http://192.168.57.139/lgift/api', 
```

La Url de la aplicación de generación del token
```
token: {
        app: 'f3e615c4-01ad-47fc-bd4e-97de0e1ba861',
        api: 'http://192.168.57.180:8085/authv2/api/v2/token'
    }
```