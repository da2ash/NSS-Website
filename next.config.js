const withCSS = require('@zeit/next-css');
const { parsed } = require('dotenv').config();

module.exports = withCSS({
    cssModules: 0,
    assetPrefix: "/nss/",
    BASE_DIR: "/nss",
})
