module.exports = {
  siteMetadata: {
    title: `Mark Liapustin (clizSec)`,
    description: `Learn more about Mark Liapustin (clizSec), Cyber Security Specialist focusing on the Information Security field. Resume, bounties, blogs, scripts, and more.`,
    author: `Mark Liapustin`,
    siteUrl: 'https://clizsec.com'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `clizSec.com`,
        short_name: `clizSec`,
        start_url: `/`,
        background_color: `#073192`,
        theme_color: `#073192`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: `UA-107382945-2`
      }
    }
  ]
};
