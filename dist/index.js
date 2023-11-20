
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-reacts-hooks.cjs.production.min.js')
} else {
  module.exports = require('./use-reacts-hooks.cjs.development.js')
}
