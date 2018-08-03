import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Pane, Text, colors } from 'evergreen-ui'

import logo from '../images/treelogo.png'

const Header = () => (
  <Nav>
    <StaticQuery
      query={graphql`
        query {
          logo: allImageSharp(
            filter: { original: { src: { ne: "treelogo" } } }
            limit: 1
          ) {
            edges {
              node {
                fluid(maxWidth: 50) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      `}
      render={({ logo }) => (
        <StyledLogo>
          <Img fluid={logo.edges[0].node.fluid} />
        </StyledLogo>
      )}
    />
    <Heavy>park</Heavy>
    <Light>ary</Light>
  </Nav>
)

export default Header

const Nav = styled(Pane)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.neutral[500]};
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledLogo = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`

const Brand = styled(Text)`
  color: ${colors.white[500]};
  font-size: 1.5rem;
`

const Heavy = Brand.extend`
  font-family: 'Roboto Black';
`

const Light = Brand.extend`
  font-family: 'Roboto Light';
`
