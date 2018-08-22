import { graphql } from 'gatsby'

export const siteInfoFragment = graphql`
  fragment SiteInfo on Site {
    siteMetadata {
      title
    }
  }
`
