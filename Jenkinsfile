pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(poll: true, changelog: true, url: 'https://github.com/alexmoleiro/dalefy', branch: 'develop')
        sh 'll'
      }
    }
  }
  environment {
    environment = 'test'
    db = 'localhost'
  }
}