import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Heavy, Light, DarkHeavy, DarkLight } from './typography'
import AppContext from './context'

const Brand = props => (
  <>
    {/* <StyledLogo>
      <AppContext.Consumer>
        {({ logo }) => <Img fluid={logo.fluid} />}
      </AppContext.Consumer>
    </StyledLogo> */}

    {props.dark ? (
      <>
        <DarkHeavy>park</DarkHeavy>
        <DarkLight>ary</DarkLight>
      </>
    ) : (
      <>
        <Heavy>park</Heavy>
        <Light>ary</Light>
      </>
    )}
  </>
)

export default Brand

const StyledLogo = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`
