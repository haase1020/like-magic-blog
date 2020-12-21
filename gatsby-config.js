module.exports = {
  siteMetadata: {
    title: `Like Magic Blog`,
    description: `Mandi Haase's blog built with Gatsby`,
    titleTemplate: `%s | Like Magic Blog`,
    url: ``,
    image: `believe.png`,
    twitterUsername: `@mandi_haase`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variable: true,
            weights: ['200..900'],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Paprika`,
          },
        ],
      },
    },
  ],
}
