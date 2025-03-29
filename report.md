# Docker:
## Crear imagen: $ docker build -t 011-desafio-modulo-8 .

## Problema-1:
### Angeles@DESKTOP-SE5R1LF MINGW64 /c/backend-curso/desafios/011-desafio-modulo-8 (main)
### $ docker build -t 011-desafio-modulo-8
### ERROR: "docker buildx build" requires exactly 1 argument.
### See 'docker buildx build --help'.

### Usage:  docker buildx build [OPTIONS] PATH | URL | -       

### Start a build

## Solución-1: abrir Docker Desktop para que esté funcionando en mi computador

# JENKINS REPORT

Started by user Angeles Cahill
Obtained Jenkinsfile from git https://github.com/AngelesCahill/nodejs-docker-jenkins
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/AngelesCahill/nodejs-docker-jenkins # timeout=10
Fetching upstream changes from https://github.com/AngelesCahill/nodejs-docker-jenkins
 > git.exe --version # timeout=10
 > git --version # 'git version 2.47.0.windows.1'
 > git.exe fetch --tags --force --progress -- https://github.com/AngelesCahill/nodejs-docker-jenkins +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision db0749e200f81f4ee34cd49a7f5bbe904bcdb7da (refs/remotes/origin/main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f db0749e200f81f4ee34cd49a7f5bbe904bcdb7da # timeout=10
Commit message: "cambiando version de supertest"
 > git.exe rev-list --no-walk fc7184c5682574a65031feb3cddc640e68503a14 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] echo
📥 Clonando el repositorio...
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/AngelesCahill/nodejs-docker-jenkins # timeout=10
Fetching upstream changes from https://github.com/AngelesCahill/nodejs-docker-jenkins
 > git.exe --version # timeout=10
 > git --version # 'git version 2.47.0.windows.1'
 > git.exe fetch --tags --force --progress -- https://github.com/AngelesCahill/nodejs-docker-jenkins +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision db0749e200f81f4ee34cd49a7f5bbe904bcdb7da (refs/remotes/origin/main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f db0749e200f81f4ee34cd49a7f5bbe904bcdb7da # timeout=10
Commit message: "cambiando version de supertest"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Check Node.js Version)
[Pipeline] script
[Pipeline] {
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>node -v 
v22.11.0
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Dependencies)
[Pipeline] script
[Pipeline] {
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm list 
011-desafio-modulo-8@1.0.0 C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8
+-- eslint@9.23.0
+-- express@4.21.2
+-- jest@29.7.0
`-- supertest@7.1.0

[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
⚙️ Instalando dependencias...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm install 

added 22 packages, removed 24 packages, changed 10 packages, and audited 419 packages in 1s

65 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm run build 

> 011-desafio-modulo-8@1.0.0 build
> echo 'No hay proceso de compilación en este proyecto'

'No hay proceso de compilaci�n en este proyecto'
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Test)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
🧪 Ejecutando pruebas...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm run test 

> 011-desafio-modulo-8@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage --forceExit

(node:20756) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  console.log
    Servidor corriendo en http://localhost:3000

      at Server.log (server.js:34:11)

PASS test/api.test.js
  API Tests
    √ GET /tasks - Obtener todas las tareas (39 ms)
    √ GET /tasks/1 - Buscar una tarea por ID (4 ms)

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |   93.75 |       50 |     100 |   93.33 |                   
 server.js |   93.75 |       50 |     100 |   93.33 | 24                
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.905 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
🚀 Desplegando aplicación...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm start  

> 011-desafio-modulo-8@1.0.0 start
> node server.js

Servidor corriendo en http://localhost:3000

Problema-1-jenkins: 
Jenkins queda cargando indefinidamente.
Solucion-1-jenkins:
stage('Deploy') {
    steps {
        script {
            echo "🚀 Desplegando aplicación..."
            bat 'start /B npm start'
        }
    }
}
#### El flag /B asegura que el proceso se ejecute en segundo plano y no bloquee el pipeline.

## Corriendo jenkins nuevamente: 

Started by user Angeles Cahill
Obtained Jenkinsfile from git https://github.com/AngelesCahill/nodejs-docker-jenkins
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/AngelesCahill/nodejs-docker-jenkins # timeout=10
Fetching upstream changes from https://github.com/AngelesCahill/nodejs-docker-jenkins
 > git.exe --version # timeout=10
 > git --version # 'git version 2.47.0.windows.1'
 > git.exe fetch --tags --force --progress -- https://github.com/AngelesCahill/nodejs-docker-jenkins +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision c9c436356a4873be5c0ef6c2ab5da89c6c20038c (refs/remotes/origin/main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f c9c436356a4873be5c0ef6c2ab5da89c6c20038c # timeout=10
Commit message: "corrigiendo error en archivo jenkinsfile, una llave"
 > git.exe rev-list --no-walk fc7184c5682574a65031feb3cddc640e68503a14 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] echo
📥 Clonando el repositorio...
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url https://github.com/AngelesCahill/nodejs-docker-jenkins # timeout=10
Fetching upstream changes from https://github.com/AngelesCahill/nodejs-docker-jenkins
 > git.exe --version # timeout=10
 > git --version # 'git version 2.47.0.windows.1'
 > git.exe fetch --tags --force --progress -- https://github.com/AngelesCahill/nodejs-docker-jenkins +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision c9c436356a4873be5c0ef6c2ab5da89c6c20038c (refs/remotes/origin/main)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f c9c436356a4873be5c0ef6c2ab5da89c6c20038c # timeout=10
Commit message: "corrigiendo error en archivo jenkinsfile, una llave"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
⚙️ Construyendo el proyecto...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm install 

up to date, audited 419 packages in 1s

65 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Test)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
🧪 Ejecutando pruebas...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>npm run test 

> 011-desafio-modulo-8@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage --forceExit

(node:3344) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  console.log
    Servidor corriendo en http://localhost:3000

      at Server.log (server.js:34:11)

PASS test/api.test.js
  API Tests
    √ GET /tasks - Obtener todas las tareas (45 ms)
    √ GET /tasks/1 - Buscar una tarea por ID (5 ms)

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |   93.75 |       50 |     100 |   93.33 |                   
 server.js |   93.75 |       50 |     100 |   93.33 | 24                
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.802 s, estimated 1 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
🚀 Desplegando aplicación...
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\pipelineDesafioM8>start /B npm start 

> 011-desafio-modulo-8@1.0.0 start
> node server.js

[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] echo
✅ Pipeline completado con éxito
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS


## RESUME DE COMMITS EN GITHUB:
### subiendo cambios en REPORT
### corrigiendo error en archivo jenkinsfile, una llave
### cambio en stage deploy para que el proceso se ejecute en segundo plano
### cambiando version de supertest
### cambios configuracion jest
### cambios para configurar jest
### en archivo Jenkinsfile se cambian los sh por bat
### se mueve archivo Jenkinsfile
### Cambio linea 20 de jenkinsfile
### cambios en archivo jenkinsfile
### subiendo archivos y cambios jenkins y cambios en readme
### subiendo archivos docker
### Primer commit