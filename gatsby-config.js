module.exports = {
  siteMetadata: {
    title: `Mealplanshuffle`,
    description: `Blazing Fast Mealplanner`,
    author: `@wirtzdan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mealplanshuffle`,
        short_name: `Mealplanshuffle`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: `./src/assets/copy.svg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    }
  ]
};
