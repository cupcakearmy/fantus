/* jshint esversion:8, asi:true */

const withStylus = require('@zeit/next-stylus')
const withCss = require('@zeit/next-css')

const config = require('dotenv').config().parsed || {}
const { RECAPTCHA_CLIENT, RECAPTCHA_SERVER } = config

module.exports = withCss(withStylus({
    publicRuntimeConfig: {
        RECAPTCHA_CLIENT,
    },
    serverRuntimeConfig: config,
}))