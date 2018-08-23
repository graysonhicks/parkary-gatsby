import React, { Component } from 'react'
import { auth, db } from '../../firebase'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import { Card, Heading, Input, Button } from 'rebass'

import LoginLink from '../login/link'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(
              {
                username: '',
                email: '',
                passwordOne: '',
                passwordTwo: '',
                error: null,
              },
              () => {
                navigate(`/`)
              }
            )
          })
          .catch(error => {
            console.log('my db')

            this.setState({ error: error })
          })
      })
      .catch(error => {
        console.log('create')

        this.setState({ error: error })
      })

    event.preventDefault()
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === ''

    return (
      <SignupFormContainer>
        <SignupFormHeading>Sign Up</SignupFormHeading>
        <SignupFormForm onSubmit={this.onSubmit}>
          <SignupFormInput
            value={username}
            onChange={event => this.setState({ username: event.target.value })}
            type="text"
            placeholder="Full Name"
          />
          <SignupFormInput
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email Address"
          />
          <SignupFormInput
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
            type="password"
            placeholder="Password"
          />
          <SignupFormInput
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
            type="password"
            placeholder="Confirm Password"
          />
          <SignupFormSignUpButton disabled={isInvalid} type="submit">
            Sign Up
          </SignupFormSignUpButton>

          {error && <p>{error.message}</p>}
        </SignupFormForm>
        <LoginLink />
      </SignupFormContainer>
    )
  }
}

export default SignUpForm

const SignupFormContainer = styled(Card)`
  width: 400px;
  padding: 20px;
  align-self: center;
`

const SignupFormHeading = styled(Heading)`
  margin-bottom: 15px;
`

const SignupFormForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const SignupFormInput = styled(Input)`
  margin-bottom: 7.5px;
`

const SignupFormSignUpButton = styled(Button)``
