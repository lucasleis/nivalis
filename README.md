# Nivalis — Deployment Guide

Este documento describe el proceso recomendado para deployar una nueva versión del proyecto en el servidor, así como buenas prácticas y comandos útiles para administración.

## Deploy

### Requisitos previos en el servidor

Antes de ejecutar cualquier deploy, asegurarse de tener instalado:

- Git
- Docker y Docker Compose
- Nginx configurado como reverse proxy
- Archivo .env configurado correctamente en el servidor
(no se sube a Git)


### Actualizar código y deploy

1. Actualizar desde el repositorio
```
git pull
```

2. Ejecutar script de deploy
En el directorio ./nivalis ejecutar:
```
deploy-nivalis
```


## Nginx

El servidor usa un archivo de configuración en:
```
/etc/nginx/sites-available/tu-dominio
```

Si se modifica este archivo, ejecutar:
```
sudo systemctl reload nginx
```




