module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `00xgplm2tq8k`,
        accessToken: `4f4bd8a893e4775e1bbabf9046e24a785a4ca9735f0ba386eb8e004317d46e92`,
      },
    },
    { resolve: `gatsby-plugin-single-park` },
    { resolve: `gatsby-plugin-parks-by-city` },
  ],
}
