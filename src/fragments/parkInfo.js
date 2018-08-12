import { graphql } from 'gatsby'

export const parksInfoFragment = graphql`
  fragment ParkInfo on ContentfulPark {
    id
    title
    description {
      description
    }
    location {
      lat
      lng: lon
    }
    featuredImage {
      fluid(maxWidth: 250, maxHeight: 200) {
        ...GatsbyContentfulFluid
      }
    }
    rating
    fields {
      slug
      cityState
    }
  }
`
