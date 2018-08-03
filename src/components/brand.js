import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Heavy, Light } from './typography'
import AppContext from './context'

const Brand = () => (
  <>
    <StyledLogo>
      <AppContext.Consumer>
        {({ logo }) => <Img fluid={logo.fluid} />}
      </AppContext.Consumer>
    </StyledLogo>

    <Heavy>park</Heavy>
    <Light>ary</Light>
  </>
)

export default Brand

const StyledLogo = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`
