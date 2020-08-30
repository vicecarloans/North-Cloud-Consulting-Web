const lessToJson = require("less-to-json");
const path = require("path");
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
    contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
    throw new Error(
        "Contentful spaceId and the access token need to be provided."
    );
}

module.exports = {
    siteMetadata: {
        title: "North Cloud Consulting",
    },
    pathPrefix: "/gatsby-contentful-starter",
    plugins: [
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-styled-components",
            options: { displayName: true, preprocess: false },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-contentful",
            options: contentfulConfig,
        },
        {
            resolve: "gatsby-plugin-less",
            options: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: lessToJson("src/theme/vars.less"),
                },
            },
        },
        {
            resolve: "gatsby-plugin-antd",
            options: {
                style: true,
            },
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                src: path.join(__dirname, "src"),
                pages: path.join(__dirname, "src/pages"),
                components: path.join(__dirname, "src/components"),
            },
        },
    ],
};
