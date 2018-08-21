import { find, kebabCase } from 'lodash'

const parseParksFromContentfulJS = ({ items }) => {
  let parsedParks = []
  const unParsedParks = items

  for (let i = 0; i < unParsedParks.length; i++) {
    let newPark = {}
    const id = unParsedParks[i].sys.id
    const currentPark = unParsedParks[i].fields

    const {
      water,
      dogPark,
      playground,
      shelter,
      pondLake,
      scenic,
      discGolf,
      golfCourse,
      soccerField,
      picnicTables,
      baseballField,
      creekRiver,
      restrooms,
      toddlerPlayArea,
      tennisCourt,
      walkingPath,
      waterFountain,
      amphitheater,
      basketballCourt,
      bbqGrill,
      description,
      featuredImage,
      location,
      rating,
      title,
      city,
      state,
    } = currentPark

    const formattedCity = kebabCase(city)
    const formattedState = kebabCase(state)
    const cityState = `${formattedState}/${formattedCity}`
    const name = kebabCase(title)

    const slug = `${formattedState}/${formattedCity}/${name}`

    const newFields = { cityState, slug }

    const newThumbnail = {
      fluid: {
        src: `${featuredImage.fields.file.url}?w=500&h=400&q=50`,
        srcSet: `${featuredImage.fields.file.url}?w=500&h=400&q=50`,
        sizes: '"(max-width: 500px) 100vw, 500px"',
        aspectRatio: 1.25,
      },
    }

    const newLocation = {
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lon),
    }

    newPark.node = {
      id,
      rating,
      title,
      amenities: {
        water,
        dogPark,
        playground,
        shelter,
        pondLake,
        scenic,
        discGolf,
        golfCourse,
        soccerField,
        picnicTables,
        baseballField,
        creekRiver,
        restrooms,
        toddlerPlayArea,
        tennisCourt,
        walkingPath,
        waterFountain,
        amphitheater,
        basketballCourt,
        bbqGrill,
      },
      description: {
        description: description,
      },
      thumbnail: newThumbnail,
      location: newLocation,
      fields: newFields,
    }

    parsedParks.push(newPark)
  }
  return parsedParks
}

export default parseParksFromContentfulJS
