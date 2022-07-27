module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "aleksandralung-com",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    "gatsby-plugin-sass",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images/",
      },
      __key: "images",
    },

  //  {
  //    resolve: `gatsby-source-filesystem`,
  //    options: {
  //      name: `data`,
  //      path: `${ __dirname }/data/`,
  //      ignore: [`**/\.*`], // ignore files starting with a dot
   //   },
  //  },

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
  ],
};
