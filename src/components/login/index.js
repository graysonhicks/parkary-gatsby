import React, { Component } from 'react'
import { auth } from '../../firebase'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Card, Heading, Input, Button, Text } from 'rebass'
import SignUpLink from '../signup/link'
import ForgotPasswordLink from '../forgotpassword/link'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: null,
    }
  }

  onSubmit = event => {
    const { email, password } = this.state

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(
          {
            email: '',
            password: '',
            error: null,
          },
          () => {
            navigate(`/`)
          }
        )
      })
      .catch(error => {
        this.setState({ error: error })
      })

    event.preventDefault()
  }

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <LoginFormContainer>
        <LoginFormHeading>Login</LoginFormHeading>
        <LoginFormForm onSubmit={this.onSubmit}>
          <LoginFormInput
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email Address"
          />
          <LoginFormInput
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            placeholder="Password"
          />
          <LoginFormLoginButton disabled={isInvalid} type="submit">
            Sign In
          </LoginFormLoginButton>

          {error && <p>{error.message}</p>}
        </LoginFormForm>
        <ForgotPasswordLink />
        <SignUpLink />
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

const LoginFormForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const LoginFormInput = styled(Input)`
  margin-bottom: 7.5px;
`

const LoginFormLoginButton = styled(Button)``

const LoginFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
