pipeline {
    agent { docker { image 'node' } }
    stages {
        stage('Clean up') {
            steps {
               deleteDir()            }
        }
        stage('Clone Repo') {
            steps {
                sh "git clone https://github.com/rajeevmehta-dev/NodeWithDocker.git"
            }
        }
        stage('build') {
            steps {
                dir('NodeWithDocker') {
                       sh 'node --version'
                }
            }
        }
    }
}