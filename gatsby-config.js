require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Reaktor Warehouse',
    description: 'Reaktor assignment for 2021 junior positions',
    author: '@sezze',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#194d5e',
        theme_color: '#194d5e',
        display: 'minimal-ui',
        icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
};
