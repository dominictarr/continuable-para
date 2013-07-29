var list = require('continuable-list')
var hash = require('continuable-hash')
var maybeCallback = require('continuable/maybe-callback')

module.exports = maybeCallback(function (obj) {
  if(Array.isArray(obj))
    return list(obj)
  else if('object' === typeof obj)
    return hash(obj)
  else
    return list([].slice.call(arguments))
})
