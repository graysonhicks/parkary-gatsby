import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'rebass'
import { orderBy } from 'lodash'
import { createClient } from 'contentful'
import ParkCard from './card'
import NoResultsCard from './noresultscard'

import Toolbar from './../toolbar'
import MainMap from '../map'

import { ResultsContext } from './../context'
import parseParksFromContentfulJS from './parseParks'

// Templating each cities parks as a grid and map page in Gatsby
// means I cannot have a top level component storing a shared state.
// In order to have filters persist across Gatsby pages,
// we must use some kind of data storage.
// The Router offers a state {} object on its location property,
// which seems to work between the grid and map pages,
// but when they are clicked away from (like to an individual park)
// the location state object is lost.  I think this may be a bug with
// the Gatsby/React router based on some issues I found https://github.com/gatsbyjs/gatsby/issues/7174
// but for now using sessionStorage.
// The sessionStorage is updated everytime a filter is added or removed.
// It is cleared when a new search is inputted, and follows normal
// sessionStorage behaviors.
class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredParks: props.parks,
      parks: props.parks,
      selectedAmenities: [],
      sort: '',
      searchOnChange: false,
    }
  }

  componentDidMount() {
    // Check if any filters are stored in sessionStorage. This is only way to
    // preserve the selected amenities filter when clicking to a park page
    // since React Router wont update location state if url is changing.
    //
    // Also checking if sort is set in storage.
    this.setState(
      {
        selectedAmenities: sessionStorage.getItem('selectedAmenities')
          ? JSON.parse(sessionStorage.getItem('selectedAmenities'))
          : [],
        sort: sessionStorage.getItem('sort')
          ? sessionStorage.getItem('sort')
          : '',
      },
      () => this.handleSort(this.state.sort)
    )
    // The filtering is handled in the actual render, but sort is handled
    // by setting state and mutating the parks array
  }

  handleClickFilter = name => {
    // If filter already on, turn it off.  Otherwise, add to
    // state.
    // Either way, update session storage.
    if (this.state.selectedAmenities.includes(name)) {
      this.setState(prevState => {
        let selectedAmenitiesMinusClicked = [...prevState.selectedAmenities]
        const index = selectedAmenitiesMinusClicked.indexOf(name)
        selectedAmenitiesMinusClicked.splice(index, 1)
        sessionStorage.setItem(
          'selectedAmenities',
          JSON.stringify(selectedAmenitiesMinusClicked)
        )
        return {
          selectedAmenities: selectedAmenitiesMinusClicked,
        }
      }, this.filterParks)
    } else {
      this.setState(prevState => {
        sessionStorage.setItem(
          'selectedAmenities',
          JSON.stringify([...prevState.selectedAmenities, name])
        )
        return {
          selectedAmenities: [...prevState.selectedAmenities, name],
        }
      }, this.filterParks)
    }
  }

  filterParks = () => {
    const filteredParks = this.state.parks.filter(park => {
      const { node } = park
      let hasAllFilteredAmenities = true
      this.state.selectedAmenities.map(amenity => {
        if (!node.amenities[amenity]) {
          hasAllFilteredAmenities = false
          return false
        } else {
          return true
        }
      })
      return hasAllFilteredAmenities && park
    })

    this.setState({
      filteredParks: filteredParks,
    })
  }

  handleSort = type => {
    // Going to need to handle sort settings similar to filter settings
    // in regards to maintaining between page switches with location obj.
    const preSortedParks = [...this.state.parks]

    let sortedArray

    switch (type) {
      case 'rating-asc':
        sortedArray = this.sortByRating(preSortedParks, 'asc')
        break
      case 'rating-desc':
        sortedArray = this.sortByRating(preSortedParks, 'desc')
        break
      case 'distance':
        sortedArray = this.sortByDistance(preSortedParks)
        break
      default:
        sortedArray = preSortedParks
        break
    }

    sessionStorage.setItem('sort', type)

    this.setState(
      {
        sort: type,
        parks: sortedArray,
      },
      () => this.filterParks()
    )
  }

  handleClickSort = type => {
    // When sort is clicked, have to do a special check to see if turning sort
    // on or off.  But don't want this done on page navigation if set in storage.
    const sortType = type !== this.state.sort ? type : ''
    this.handleSort(sortType)
  }

  sortByRating = (parks, order) => {
    return orderBy(parks, ({ node }) => node.rating, order)
  }

  sortByDistance = parks => {
    // Use contentful js api to determine distance from search center
    return parks
  }

  toggleSearchOnChange = () => {
    this.setState({
      searchOnChange: !this.state.searchOnChange,
    })
  }

  boundsHandler = map => {
    if (!this.state.searchOnChange) return
    const bounds = map.getBounds()
    const sw = bounds.getSouthWest()
    const ne = bounds.getNorthEast()
    const boundsString = `${sw.lat()},${sw.lng()},${ne.lat()},${ne.lng()}`

    const client = createClient({
      space: '00xgplm2tq8k',
      accessToken:
        '4f4bd8a893e4775e1bbabf9046e24a785a4ca9735f0ba386eb8e004317d46e92',
    })
    client
      .getEntries({
        content_type: 'park',
        'fields.location[within]': boundsString,
      })
      .then(function(entries) {
        const parsedParks = parseParksFromContentfulJS(entries)
        return parsedParks
      })
      .then(parsedParks =>
        this.setState({ parks: parsedParks }, () =>
          this.handleSort(this.state.sort)
        )
      )
      .catch(console.error)
  }

  render() {
    return (
      <ResultsContext.Consumer>
        {({ view, cityState }) => {
          return (
            <ResultsContainer>
              <Toolbar
                selectedAmenities={this.state.selectedAmenities}
                handleClickFilter={this.handleClickFilter}
                handleClickSort={this.handleClickSort}
                cityState={cityState}
                sort={this.state.sort}
              />
              {!this.state.filteredParks.length && view === 'results' ? (
                <NoResultsCard />
              ) : (
                (view === 'results' && (
                  <CardContainer>
                    {this.state.filteredParks.map(({ node }) => {
                      return <ParkCard key={node.id} park={node} />
                    })}
                  </CardContainer>
                )) ||
                (view === 'map' && (
                  <MapContainer>
                    <MainMap
                      selectedAmenities={this.state.selectedAmenities}
                      boundsHandler={this.boundsHandler}
                      toggleSearchOnChange={this.toggleSearchOnChange}
                      filteredParks={this.state.filteredParks}
                      searchOnChange={this.state.searchOnChange}
                    />
                  </MapContainer>
                ))
              )}
            </ResultsContainer>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

export default Results

const ResultsContainer = styled(Container)`
  padding: 0;
  width: 100%;
  max-width: unset;
  display: flex;
  flex-wrap: wrap;
`

const CardContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  max-width: 1024px;
`

const MapContainer = CardContainer.extend``
