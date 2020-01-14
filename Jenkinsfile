pipeline {
    agent any

    triggers {
        pollSCM('*/1 * * * *')
    }

    stages {

	 stage('Build') {

            steps {
                 sh "echo Building"
            }
        }

	 stage('Test') {


            steps {
                 sh "echo Testing"
            }
        }



        stage('Deploy') {

	    environment {
                OW_AUTH = 'd89e10cf-5982-4941-bc9d-e2af0578f0f6:zfwyZdSH3egRkBbEvktKoHxmtSz463XJ9NRpewQp0qmBsZptgP0hrky4bJFUUG6b'
                OW_APIHOST = 'https://fn.enlight.dev'
            }

            steps {
                 sh '''serverless deploy -v'''
            }
        }
    
                
    }
}
