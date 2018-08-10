import React, { Component } from 'react'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import styled from 'styled-components'

import { Container, Card, Text, Input } from 'rebass'

import { fadeIn } from '../styles/utils'

class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }

    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter() {
    console.log('enter')
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })

    console.log('address', address)

    geocodeByAddress(address)
      .then(results => {
        console.log('result', results[0])
        return getLatLng(results[0])
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  testarray = [
    { id: '1', description: 'test' },
    { id: '2', description: 'test' },
    { id: '3', description: 'test' },
    { id: '4', description: 'test' },
  ]

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <InputContainer>
            <StyledMainSearchInput
              height={40}
              width="100%"
              value={this.state.address}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <ResultsPanel>
              {loading && (
                <LoadingPanel>
                  <Text>Loading...</Text>
                </LoadingPanel>
              )}
              {suggestions &&
                suggestions.map(suggestion => (
                  <StyledSuggestion
                    key={suggestion.id}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <SuggestionText>{suggestion.description}</SuggestionText>
                  </StyledSuggestion>
                ))}
            </ResultsPanel>
          </InputContainer>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default MainSearch

const InputContainer = styled(Container)`
  width: 500px;
  padding: 0;
`

const StyledMainSearchInput = styled(Input)`
  animation: ${fadeIn} 0.7s linear;
  background-color: white;
  padding: 10px;
`

const ResultsPanel = styled(Card)`
  padding: 0;
  position: absolute;
  z-index: 1;
  width: 500px;
`

const LoadingPanel = styled(Card)`
  display: flex;
  background-color: white;
  align-items: center;
  padding-left: 10px;
`

const StyledSuggestion = styled(Card)`
  display: flex;
  background-color: white;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  animation: ${fadeIn} 0.3s linear;

  &:hover {
    background-color: teal;
  }
`

const SuggestionText = styled(Text)``
