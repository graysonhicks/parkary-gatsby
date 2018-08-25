import { graphql } from 'gatsby'

export const parksInfoFragment = graphql`
  fragment ParkInfo on ContentfulPark {
    id
    contentful_id
    title
    ...Amenities
    description {
      description
    }
    location {
      lat
      lng: lon
    }
    thumbnail: featuredImage {
      fluid(maxWidth: 500, maxHeight: 400) {
        ...GatsbyContentfulFluid
      }
    }
    featuredImage {
      fluid(maxWidth: 1024, maxHeight: 512) {
        ...GatsbyContentfulFluid
      }
    }
    parkImages {
      fluid(maxWidth: 900, maxHeight: 600) {
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
