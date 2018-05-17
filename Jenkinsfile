pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(poll: true, changelog: true, url: 'https://github.com/alexmoleiro/dalefy', branch: 'master')
        sh '''npm install
npm start build'''
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts 'JsBuild'
      }
    }
  }
  environment {
    environment = 'test'
    db = 'localhost'
  }
}