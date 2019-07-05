module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/static/content/`,
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `kingstonvasectomy.ca`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //     useACF: false,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5lhzcqoj470a`,
        accessToken: `5HCTvHpeTrWjVGxodHBcJoEPHvPTAduaOK42MMy8yNw`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `kingston-vasectomy`,
        accessToken: `MC5YUjdSVGhBQUFDSUEwSUo0.77-977-977-977-9cO-_vV1A77-977-977-977-977-977-977-977-977-977-9ce-_vSHvv71D77-977-977-977-9MO-_vXjvv73vv70`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
