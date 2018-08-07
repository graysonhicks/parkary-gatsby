import React, { Component } from 'react'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import styled from 'styled-components'

import { SearchInput, Card, Text, colors } from 'evergreen-ui'
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

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
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
          <>
            <StyledMainSearchInput
              height={40}
              value={this.state.address}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <ResultsPanel>
              <Suggestions>
                {loading && (
                  <LoadingPanel height={40}>
                    <SuggestionText>Loading...</SuggestionText>
                  </LoadingPanel>
                )}
                {suggestions.map(suggestion => (
                  <StyledSuggestion
                    key={suggestion.id}
                    height={40}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <SuggestionText>{suggestion.description}</SuggestionText>
                  </StyledSuggestion>
                ))}
              </Suggestions>
            </ResultsPanel>
          </>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default MainSearch

const StyledMainSearchInput = styled(SearchInput)`
  animation: ${fadeIn} 0.7s linear;
  width: 500px;
`

const ResultsPanel = styled(Card)``

const LoadingPanel = styled(Card)`
  display: flex;
  background-color: ${colors.white['500']};
  align-items: center;
  padding-left: 10px;
`

const Suggestions = styled(Card)`
  width: 500px;
  position: absolute;
  z-index: 1;
`
const StyledSuggestion = styled(Card)`
  display: flex;
  background-color: ${colors.white['500']};
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  animation: ${fadeIn} 0.3s linear;

  &:hover {
    background-color: ${colors.blue['50']};
  }
`

const SuggestionText = styled(Text)``
