pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {

        stage('Deploy') {

	    environment {
                OW_AUTH_KEY = credentials('OW_AUTH_KEY')
                OW_APIHOST_TEST = credentials('OW_APIHOST_TEST')
            }

            steps {
                 sh '''serverless deploy -v'''
            }
        }
    
                
    }
}
