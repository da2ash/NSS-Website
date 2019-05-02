const withCSS = require('@zeit/next-css');
const { parsed } = require('dotenv').config();

module.exports = withCSS({
    cssModules: 0,
    assetPrefix: process.env.NODE_ENV === "dev" ? "/" : "/nss/",
    env: {
        BASE_DIR: process.env.NODE_ENV === "dev" ? "" : "/nss",
    }
})
