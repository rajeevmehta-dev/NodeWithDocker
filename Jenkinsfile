pipeline {
    agent any
    stages {
        stage('Clean up') {
            steps {
               deleteDir()            }
        }
        stage('Get Data') {
            steps {
               sh "git clone https://github.com/rajeevmehta-dev/NodeWithDocker.git"            }
        }
        stage('Build') {
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