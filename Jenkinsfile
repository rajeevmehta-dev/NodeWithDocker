pipeline {
    agent any
    stages {
        stage('Clean up') {
            steps {
               deleteDir()            }
        }
        stage('build') {
            steps {
                 sh '''#!/bin/bash
                  cd NodeWithDocker
                  docker-compose down
                  docker-compose up -d --build
                '''        
            }
        }
    }
}