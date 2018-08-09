const path = require(`path`)
const kebabCase = require('lodash.kebabcase')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ContentfulPark`) {
    const state = kebabCase(node.state)
    const city = kebabCase(node.city)
    const name = kebabCase(node.title)
    const slug = `${state}/${city}/${name}`

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
              title
              node_locale
              contentful_id
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
