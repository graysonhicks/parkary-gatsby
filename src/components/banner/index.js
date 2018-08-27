import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Message } from 'rebass'

const grow = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`

const SiteBanner = ({ message }) => {
  return <BannerMessage>{message}</BannerMessage>
}

export default SiteBanner

const BannerMessage = styled(Message)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  animation: ${grow} 5s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 99;
`
