const path = require(`path`)
const kebabCase = require('lodash.kebabcase')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ContentfulPark`) {
    // Build a kebab case slug for the city and state URL.
    const city = kebabCase(node.city)
    const state = kebabCase(node.state)
    const cityState = `${state}/${city}`
    // Grab the amenities and set into own object and property.
    // Would like cleaner solution but: // https://stackoverflow.com/questions/35531775/javascript-object-destructuring-and-aliasing/
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
    } = node

    node.amenities = {
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
    }

    // Create node field on node that is the slug URL (which should be unique for all city/states).
    createNodeField({
      node,
      name: `cityState`,
      value: cityState,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // Now group all parks by their city/state.
    graphql(`
      {
        allContentfulPark {
          group(field: fields___cityState) {
            fieldValue
          }
        }
      }
    `).then(result => {
      // Then build a grid and map page for each city.
      result.data.allContentfulPark.group.forEach(node => {
        // Have to have different templates, even though basically identical.
        // Because they share the Results component, which needs to know what
        // page it is.  The view property here is only passed once,
        // so once trying to click over and change the view, the view property
        // doesn't change.  Could maybe be refactored using Gatsby Link state
        // object when toggling between the two.
        // Either way, not ideal.
        createPage({
          path: node.fieldValue,
          component: path.resolve(`./src/templates/city.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            cityState: node.fieldValue,
            view: 'grid',
          },
        })

        createPage({
          path: `${node.fieldValue}/map/`,
          component: path.resolve(`./src/templates/map.js`),
          context: {
            cityState: node.fieldValue,
            view: 'map',
          },
        })
      })
      resolve()
    })
  })
}
