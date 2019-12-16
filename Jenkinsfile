pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {

        stage('Deploy') {

	    environment {
                OW_AUTH = credentials('OW_AUTH')
                OW_APIHOST = credentials('OW_APIHOST')
            }

            steps {
                 sh '''serverless deploy -v'''
            }
        }
    
                
    }
}
