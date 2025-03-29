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

### Creamos carpeta test y dentro de ella api.test.js
### Instalamos eslint, jest y supertest como devDependencies
 npm i -D jest supertest eslint
### Agregamos en el package.json
    "jest": {
    "testEnvironment": "node" // indica que trabajaremos con node
    },
    "engines": {
        "node": ">=18"  // indica que tenemos instalado un node con una version igual o mayor que 18
    },

    Y creamos los scripts que usaremos: 
      "scripts": {
        "start": "node server.js",
        "build": "echo 'No hay proceso de compilación en este proyecto'",
        "test": "jest --coverage --forceExit",
        "lint": "eslint ."
    },
### Creamos archivo jenkinFile
### Configuramos jest en archivo propio: jest.config.js:
export default {
  transform: {},
  testEnvironment: "node",
};
#### rm -rf node_modules package-lock.json // para reinstalar node_modules y package-lock.json
