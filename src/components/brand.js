import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box } from 'rebass'

const Brand = ({ logo, dark, ...rest }) => (
  <StaticQuery
    query={graphql`
      query logoQuery {
        logo: allImageSharp(
          filter: { original: { src: { ne: "treelogo" } } }
          limit: 1
        ) {
          edges {
            node {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={({ logo }) => (
      <>
        <StyledLogo>
          <Img fluid={logo.edges[0].node.fluid} />
        </StyledLogo>
        {dark ? (
          <HeadingContainer>
            <DarkStrong {...rest}>park</DarkStrong>
            <DarkLight {...rest}>ary</DarkLight>
          </HeadingContainer>
        ) : (
          <HeadingContainer>
            <StyledStrong {...rest}>park</StyledStrong>
            <StyledLight {...rest}>ary</StyledLight>
          </HeadingContainer>
        )}
      </>
    )}
  />
)

export default Brand

const StyledLogo = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`
const HeadingContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`

const StyledStrong = styled(Heading)`
  font-weight: 800;
  color: white;
  height: 100%;
`

const StyledLight = styled(Heading)`
  color: white;
  font-weight: 300;
  height: 100%;
`

const DarkStrong = StyledStrong.extend`
  color: black;
  height: 100%;
`

const DarkLight = StyledLight.extend`
  color: black;
  height: 100%;
`
