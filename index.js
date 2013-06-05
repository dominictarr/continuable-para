var list = require('continuable-list')
var hash = require('continuable-hash')

module.exports = function (obj) {
  if(Array.isArray(obj))
    return list(obj)
  else if('object' === typeof obj)
    return hash(obj)
  else
    return list([].slice.call(arguments))
}
