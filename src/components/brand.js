import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Heavy, Light } from './typography'

const Brand = () => (
  <>
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
  </>
)

export default Brand

const StyledLogo = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`
