pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {

        stage('Deploy') {

	    environment {
                OW_AUTH = credentials('OW_AUTH_KEY')
                OW_APIHOST = credentials('OW_APIHOST_TEST')
            }

            steps {
                 sh '''serverless deploy -v'''
            }
        }
    
                
    }
}
