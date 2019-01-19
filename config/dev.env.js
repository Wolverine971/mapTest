'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const { MAP_KEY, GOOGLE_MAP } = require('../keys')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAP_KEY: MAP_KEY,
  GOOGLE_MAP: GOOGLE_MAP
})
