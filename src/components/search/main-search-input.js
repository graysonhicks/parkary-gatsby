import React, { Component } from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { navigate } from 'gatsby'

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

import { Container, Card, Text, Input, Button } from 'rebass'

import { fadeIn } from './../../styles/utils'

class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { address: '', resultUrl: null }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    sessionStorage.setItem('selectedAmenities', JSON.stringify([]))
    navigate(this.state.resultUrl)
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })

    geocodeByAddress(address)
      .then(results => {
        const result = results[0]
        // Address components in Google have different types.  We need
        // to get the state and city so we can build the url.
        const addressComponents = result['address_components']

        let state
        let city

        for (let i = 0; i < addressComponents.length; i++) {
          const currentCity = addressComponents[i]
          const addressTypes = currentCity['types']

          // Locality is the google word for city.
          if (addressTypes.includes('locality')) {
            city = kebabCase(currentCity['long_name'])
          }

          // This is the google way for state or province.
          if (addressTypes.includes('administrative_area_level_1')) {
            state = kebabCase(currentCity['long_name'])
          }
        }

        this.setState({
          resultUrl: `/${state}/${city}`,
        })
      })
      .catch(error => console.error('Error', error))
  }
  // Limiting search results to exact cities and states in US.
  searchOptions = {
    types: ['(cities)'],
    componentRestrictions: { country: 'us' },
  }

  render() {
    return (
      <>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          searchOptions={this.searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <InputContainer>
              <StyledMainSearchInput
                value={this.state.address}
                {...getInputProps({
                  placeholder: 'Search Places ...',
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
        {this.state.resultUrl ? (
          <SearchButton onClick={this.handleSubmit}>go!</SearchButton>
        ) : (
          <SearchButton disabled>go!</SearchButton>
        )}
      </>
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
  width: 500px;
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

const SearchButton = styled(Button)`
  width: 75px;
  margin-top: 10px;
  align-self: flex-end;
  justify-content: center;
  background-color: teal;
  padding: 10px;
`
