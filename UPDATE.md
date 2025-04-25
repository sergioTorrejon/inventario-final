# Sistema de Resoluciones y Circulares

# Actualizacion del Sistema de Resoluciones y Circulares Ticket 0709

## Requisitos

* Sistema Operativo Debian 11
* node 12.22.5

## Actualización

PASOS 

1.- Detener el Servicio

```
sudo -u sireci -H pm2 stop main
```

2.- Repositorio de Archivos Update


Descargar el aplicativo actualizado de la siguiente dirección en su ultima versión
```
\\192.168.59.140\2.-sireciv2
├── api
	├── dist
├── app
```

3.- Actualizar la carpeta SIRECI
Para la actualizacion tanto en el frontend y el backend de la aplicación se encuentran alojados dentro de la carpeta
```
/var/www/sireci
```
El contenido de la carpeta es lo siguiente:
```
/var/www/sireci/
├── api
├── app
└── manual
```
- api: Contiene el Backend del sistema
- app: Contiene el Frontend del Sistema
- bd: Contiene el backup de la BD a importar

Por seguridad las aplicaciones nunca, deberan ejecutarse con el usuario ROOT, por lo tanto se va a crear el usuario especifico **sireci**


## CONFIGURACIONES

## Configuración del BackEnd

En el archivo 
```
/api/
├── .env
```

Se debe añadir una variable con la ruta de la carpeta con información del Sistema

```
PATH_REPOSITORY_INFO=  (ruta) \\manual-usuario-sireci.pdf

Ejemplo: 
PATH_REPOSITORY_INFO=d:\\repo\\resoluciones\\manual-usuario-sireci.pdf
```

Se deberá copiar el archivo manual-usuario-sireci.pdf que se encuentra dentro de la carpeta /manual de la carpeta compartida de actualización.

Configuracion del Update 

El contenido de la carpeta /api/dist de la ruta debera ser reemplazada por la carpeta /dist del repositorio 
El contenido de la carpeta /app debera ser reemplazad por la carpeta /app del repositorio 



## Ejecución del BackEnd

4.- Reiniciar el Servicio

```
sudo -u sireci -H pm2 start main
```


5.- Verificar que la aplicación se encuentre corriendo:

```
pm2 status
```

┌─────┬─────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name    │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ main    │ default     │ 0.0.1   │ fork    │ 152749   │ 6h     │ 5295 │ online    │ 0%       │ 105.2mb  │ sireci   │ disabled │
└─────┴─────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘



