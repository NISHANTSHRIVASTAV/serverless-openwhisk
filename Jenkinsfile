pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {

        stage('Deploy') {

	    environment {
                OW_AUTH = credentials('0fec2aaa-038b-4e0b-85b7-22a6ce45f875:Kb5CYdKzgM2w0ckp4n5P0mNQ1Hv8SosGGyoViYWBjTVO9vG8pyp8wLBzgJsyDEUS')
                OW_APIHOST = credentials('https://fn.enlight.dev')
            }

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
