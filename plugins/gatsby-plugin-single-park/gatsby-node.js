const path = require(`path`)
const kebabCase = require('lodash.kebabcase')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ContentfulPark`) {
    const state = kebabCase(node.state)
    const city = kebabCase(node.city)
    const name = kebabCase(node.title)
    const slug = `${state}/${city}/${name}`

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

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/park.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            park_id: node.id,
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
