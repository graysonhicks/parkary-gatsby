import React, { Component } from 'react'
import firebase from 'firebase/app'

import styled from 'styled-components'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { Card, Heading } from 'rebass'

import ForgotPasswordLink from '../forgotpassword/link'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: 'none',
}

class LoginForm extends Component {
  render() {
    return (
      <LoginFormContainer>
        <LoginFormHeading>Login</LoginFormHeading>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <ForgotPasswordLink />
      </LoginFormContainer>
    )
  }
}

export default LoginForm

const LoginFormContainer = styled(Card)`
  width: 400px;
  padding: 20px;
  align-self: center;
`

const LoginFormHeading = styled(Heading)`
  margin-bottom: 15px;
`
