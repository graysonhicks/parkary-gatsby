import React, { Component } from 'react'
import firebase from 'firebase/app'

import styled from 'styled-components'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { Card, Heading, Modal, Close, Lead, Message } from 'rebass'

import ForgotPasswordLink from '../forgotpassword/link'

// Configure FirebaseUI for page.
const pageUiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: 'none',
}

// Configure FirebaseUI for modal.
const modalUiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: 'none',
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (...rest) => {
      console.log(rest)
      return false
    },
  },
}

let auth

if (typeof window !== 'undefined') {
  auth = firebase.auth()
}

class LoginFormModal extends Component {
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(this.props.toggleLoginModal, 1000)
      }
    })
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <LoginModal>
        <StyledClose onClick={this.props.toggleLoginModal} />
        <MustLogin>You must login to do that!</MustLogin>
        <LoginForm uiConfig={modalUiConfig} />
      </LoginModal>
    )
  }
}

export { LoginFormModal }

class LoginForm extends Component {
  render() {
    return (
      <LoginFormContainer>
        <LoginFormHeading>Login</LoginFormHeading>
        <StyledFirebaseAuth
          uiConfig={this.props.uiConfig ? this.props.uiConfig : pageUiConfig}
          firebaseAuth={auth}
        />
        {/* <ForgotPasswordLink /> */}
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

const LoginModal = styled(Modal)`
  padding: 0;
  padding: 40px;
  z-index: 11;
`

const StyledClose = styled(Close)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 11;
  color: black;
  font-size: 30px;
  /* text-shadow: 1px 1px 3px black; */
  width: 30px;
  height: 30px;
  padding: 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

const MustLogin = styled(Lead)`
  margin-bottom: 10px;
`
