module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/static/content/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ]
}
