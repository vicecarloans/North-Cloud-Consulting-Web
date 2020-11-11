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
        title: "North Cloud Solutions",
        author: "Clint Carvalho",
        description: "North Cloud Salesforce Consulting Firm",
        siteUrl: "https://www.northcloudsolutions.ca/",
        keywords: ["salesforce", "consulting", "north", "cloud"],
    },
    pathPrefix: "/gatsby-contentful-starter",
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "North Cloud Solutions",
                short_name: "NorthCloud",
                start_url: "/",
                background_color: "#FFF",
                theme_color: "#1890ff",
                display: "fullscreen",
                icon: "static/assets/app-logo.png",
            },
        },
        "gatsby-plugin-offline",
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        "gatsby-plugin-transition-link",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-drift",
            options: {
                appId: "k2d6295am8ua",
            },
        },
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
                utils: path.join(__dirname, "src/utils"),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        }
    ],
};
