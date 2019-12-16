pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {

        stage('Deploy') {
            steps {
                 sh '''serverless deploy -v'''
            }
        }
    
                
    }
    post {
        failure {
            mail to: 'nishantshrivastav23@gmail.com', subject: 'Build failed', body: 'Please fix!'
        }
    }
}
