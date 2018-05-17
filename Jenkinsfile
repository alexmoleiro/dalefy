pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(poll: true, changelog: true, url: 'https://github.com/alexmoleiro/dalefy', branch: 'master')
        sh 'ls -la'
      }
    }
  }
  environment {
    environment = 'test'
    db = 'localhost'
  }
}