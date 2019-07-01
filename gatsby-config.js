module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/static/content/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `kingstonvasectomy.ca`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ]
}
