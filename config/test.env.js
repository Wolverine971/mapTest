'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
//const mapKey = require('')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  })
