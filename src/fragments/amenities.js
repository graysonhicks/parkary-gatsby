import { graphql } from 'gatsby'

export const amenitiesFragment = graphql`
  fragment Amenities on ContentfulPark {
    amenities {
      water
      dogPark
      playground
    }
  }
`
