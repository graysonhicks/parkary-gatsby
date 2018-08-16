import React, { Component } from 'react'
import styled from 'styled-components'
import { startCase } from 'lodash'
import { Label } from 'rebass'
import { MdCheck, MdClose } from 'react-icons/md'

const AmenityItem = ({ name, value }) => {
  return (
    <AmenityItemContainer>
      <IconContainer>
        {value && <Check />}
        {!value && <X />}
      </IconContainer>
      <AmentityLabel>{name}</AmentityLabel>
    </AmenityItemContainer>
  )
}

class ParkCardAmenities extends Component {
  render() {
    const { amenities } = this.props

    return (
      <AmenitiesContainer>
        {Object.keys(amenities)
          // Sort amenities by true amenities first.
          .sort((a, b) => {
            return amenities[b] - amenities[a]
          })
          .map(amenity => {
            // Then return a styled/formatted amenity component based on whether
            // park does or doesn't have.
            const formattedName = startCase(amenity)
            return (
              <AmenityItem
                key={formattedName}
                name={formattedName}
                value={amenities[amenity]}
              />
            )
          })}
      </AmenitiesContainer>
    )
  }
}

export default ParkCardAmenities

const AmenitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const AmenityItemContainer = styled.div`
  display: flex;
  width: 33%;
  margin-bottom: 7px;
`

const AmentityLabel = styled(Label)``

const IconContainer = styled.span`
  margin-right: 5px;
`

const Check = styled(MdCheck)`
  color: green;
`

const X = styled(MdClose)`
  color: gray;
`
