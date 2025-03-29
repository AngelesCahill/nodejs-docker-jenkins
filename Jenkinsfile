pipeline {
 agent any
 environment {
   NODE_VERSION = '18' // Cambia si usas otra versión de Node.js
 }
 stages {
 stage('Checkout') {
 steps {
 echo "📥 Clonando el repositorio..."
 checkout scm
 }
 }
 stage('Check Node.js Version') {
 steps {
 script {
 bat 'node -v'
 }
 }
 }
 stage('Verify Dependencies') {
 steps {
 script {
 bat 'npm list'
 }
 }
 }
 stage('Build') {
 steps {
 script {
 try {
    echo "⚙️ Instalando dependencias..."
    bat 'npm install'
    bat 'npm run build'
 } catch (Exception e) {
 error("❌ Error en la etapa de Build")
 }
 }
 }
 }
 stage('Test') {
 steps {
 script {
 try {
 echo "🧪 Ejecutando pruebas..."
 bat 'npm run test'
 } catch (Exception e) {
 error("❌ Error en la etapa de Test")
 }
 }
 }
 }
 stage('Deploy') {
 steps {
 script {
 echo "🚀 Desplegando aplicación..."
 bat 'start /B npm start'
 }
 }
 }
 }
 }
 post {
 success {
 echo "✅ Pipeline completado con éxito"
 }
 failure {
 echo "❌ El pipeline ha fallado"
 }
 }
}