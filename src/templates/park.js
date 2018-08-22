import React from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'
import Park from '../components/park'

export default props => {
  const park = props.data.contentfulPark
  let referrer

  if (props.location.state && props.location.state.referrer) {
    referrer = props.location.state.referrer
  } else {
    referrer = 'grid'
  }

  return (
    <PageContextWrapper page="park">
      <Park park={park} referrer={referrer} />
    </PageContextWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPark(fields: { slug: { eq: $slug } }) {
      ...ParkInfo
    }
    site {
      ...SiteInfo
    }
  }
`
