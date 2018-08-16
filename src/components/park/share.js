import React, { Component } from 'react'
import styled from 'styled-components'
import ShareButton from 'react-social-share-buttons'

class ShareIcons extends Component {
  render() {
    const {
      fields: { slug },
      description: { description },
      title,
    } = this.props.park

    const shareText = `Check out ${title} that I found on Parkary. ${description}`
    const platforms = ['facebook', 'twitter', 'google-plus']
    return (
      <ShareIconsContainer>
        {platforms.map(platform => (
          <StyledShareButton
            compact
            socialMedia={platform}
            url={`http://parkary.com/${slug}`}
            media={'https://imgs.xkcd.com/comics/error_code.png'}
            text={shareText}
          />
        ))}
      </ShareIconsContainer>
    )
  }
}

export default ShareIcons

const ShareIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledShareButton = styled(ShareButton)``
