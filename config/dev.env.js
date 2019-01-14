'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAP_KEY: 'pk.eyJ1IjoiZGp3YXluZTMiLCJhIjoiY2pxc2ppeXQyMGttOTQzcXZvdjBuZHZweSJ9.kWjE2XSfLBrUAHDaeliJ-Q'
})
