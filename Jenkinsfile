pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(poll: true, changelog: true, url: 'https://github.com/alexmoleiro/dalefy', branch: 'master')
        sh 'npm start build'
      }
    }
  }
  environment {
    environment = 'test'
    db = 'localhost'
  }
}