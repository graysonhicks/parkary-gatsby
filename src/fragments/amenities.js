import { graphql } from 'gatsby'

export const amenitiesFragment = graphql`
  fragment Amenities on ContentfulPark {
    amenities {
      water
      dogPark
      playground
      shelter
      pondLake
      scenic
      discGolf
      golfCourse
      soccerField
      picnicTables
      baseballField
      creekRiver
      restrooms
      toddlerPlayArea
      tennisCourt
      walkingPath
      waterFountain
      amphitheater
      basketballCourt
      bbqGrill
    }
  }
`
