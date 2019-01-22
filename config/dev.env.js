'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const keys = require('../keys')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAP_KEY: keys.MAP_KEY,
  GOOGLE_MAP: keys.GOOGLE_MAP,
  BING_KEY: keys.BING_KEY
})
