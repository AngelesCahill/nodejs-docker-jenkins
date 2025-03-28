# nodejs-docker-jenkins

## github: 
https://github.com/AngelesCahill/nodejs-docker-jenkins.git


# Docker:

### crear archivo .dockerignore y agregar ahi node_modules
### crear archivo Dockerfile
### Para construir la imagen en la terminal: 
    docker build -t 011-desafio-modulo-8 .
### Para ejecutar el contenedor en la terminal:
#### Cerrar servidor abierto con npm run dev
    docker run -p 3000:3000 011-desafio-modulo-8
### url Rutas
#### http://localhost:3000/tasks
    Muestra todas las tareas
#### http://localhost:3000/tasks/1
    Muestra una tarea (en este caso con id = 1)

# Jenkins
