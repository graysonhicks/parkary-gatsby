import React, { Component } from 'react'
import { auth } from '../../firebase'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import { Card, Heading, Input, Button, Text } from 'rebass'

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      error: null,
    }
  }

  onSubmit = event => {
    const { email } = this.state

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({
          email: '',
          error: null,
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })

    event.preventDefault()
  }

  render() {
    const { email, error } = this.state

    const isInvalid = email === ''

    return (
      <ForgotPasswordFormContainer>
        <ForgotPasswordFormHeading>Reset Password</ForgotPasswordFormHeading>
        <ForgotPasswordFormForm onSubmit={this.onSubmit}>
          <ForgotPasswordFormInput
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email Address"
          />

          <ForgotPasswordFormForgotPasswordButton
            disabled={isInvalid}
            type="submit"
          >
            Reset My Password
          </ForgotPasswordFormForgotPasswordButton>

          {error && <p>{error.message}</p>}
        </ForgotPasswordFormForm>
      </ForgotPasswordFormContainer>
    )
  }
}

export default ForgotPasswordForm

const ForgotPasswordFormContainer = styled(Card)`
  width: 400px;
  padding: 20px;
  align-self: center;
`

const ForgotPasswordFormHeading = styled(Heading)`
  margin-bottom: 15px;
`

const ForgotPasswordFormForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const ForgotPasswordFormInput = styled(Input)`
  margin-bottom: 7.5px;
`

const ForgotPasswordFormForgotPasswordButton = styled(Button)``

const ForgotPasswordFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
