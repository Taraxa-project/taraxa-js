pipeline {
    agent any

    options {
      ansiColor('xterm')
      disableConcurrentBuilds()
    }

    stages {
        stage ("Upload to npmjs"){
            when { branch 'release' }
            agent {
                docker { image 'node:12.11.1-alpine'}
            }
            steps {
                sh "npm install -g npm-cli-login"
                withCredentials([usernamePassword(credentialsId: 'npmjs_login_credentials', usernameVariable: 'NPM_USERNAME', passwordVariable: 'NPM_PASSWORD')]) {
                    sh 'NPM_USER=$NPM_USERNAME NPM_PASS=$NPM_PASSWORD NPM_EMAIL=justin.snapp@taraxa.io npm-cli-login'
                }
                sh "npm publish"
            }

        }
    }
}
