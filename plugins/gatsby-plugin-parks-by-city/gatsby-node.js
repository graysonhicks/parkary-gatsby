const path = require(`path`)
const kebabCase = require('lodash.kebabcase')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ContentfulPark`) {
    const city = kebabCase(node.city)
    const state = kebabCase(node.state)
    const cityState = `${state}/${city}`

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
    graphql(`
      {
        allContentfulPark {
          group(field: fields___cityState) {
            fieldValue
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPark.group.forEach(node => {
        createPage({
          path: node.fieldValue,
          component: path.resolve(`./src/templates/city.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            cityState: node.fieldValue,
          },
        })
      })
      resolve()
    })
  })
}
