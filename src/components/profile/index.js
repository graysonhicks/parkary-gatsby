import React from 'react'
import styled from 'styled-components'

import { Card, Heading, Lead, Avatar } from 'rebass'

import AppContextConsumer from '../context'

const Profile = () => {
  return (
    <AppContextConsumer>
      {({ data: { user } }) => {
        return (
          user && (
            <ProfileCard>
              <ProfileHeading>Profile</ProfileHeading>
              <AvatarContainer>
                {user.photoURL && (
                  <ProfileAvatar size={50} src={user.photoURL} />
                )}
                <Name>{user.displayName}</Name>
              </AvatarContainer>
              <Email>{user.email}</Email>
              <ProfileHeading>Favorite Parks</ProfileHeading>
            </ProfileCard>
          )
        )
      }}
    </AppContextConsumer>
  )
}

export default Profile

const ProfileCard = styled(Card)`
  width: 500px;
  margin-top: 10px;
  padding: 20px;
`

const ProfileHeading = styled(Heading)`
  margin-bottom: 15px;
`

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const ProfileAvatar = styled(Avatar)`
  margin-right: 15px;
`

const Name = styled(Lead)``

const Email = styled(Lead)`
  margin-bottom: 15px;
`
