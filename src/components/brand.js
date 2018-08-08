import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'
import { Heading, Text, colors } from 'evergreen-ui'

import AppContext from './context'

const heavyWeight = {
  fontWeight: 800,
}

const Brand = ({ dark, ...rest }) => (
  <>
    {/* <StyledLogo>
      <AppContext.Consumer>
        {({ logo }) => <Img fluid={logo.fluid} />}
      </AppContext.Consumer>
    </StyledLogo> */}
    {dark ? (
      <>
        <DarkStrong {...rest}>
          park<DarkLight {...rest}>ary</DarkLight>
        </DarkStrong>
      </>
    ) : (
      <>
        <StyledStrong {...rest}>
          park<StyledLight {...rest}>ary</StyledLight>
        </StyledStrong>
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

const StyledStrong = styled(Heading)`
  font-weight: 800;
  color: ${colors.white['500']};
`

const StyledLight = styled(Text)`
  color: ${colors.white['500']};
`

const DarkStrong = StyledStrong.extend`
  color: ${colors.neutral['500']};
`

const DarkLight = StyledLight.extend`
  color: ${colors.neutral['500']};
`
