// Common JS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
console.log(names)
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavour')
console.log(data)

require('./7-mind-generade')
sayHi('Ahmed')
sayHi(names.Ali)
sayHi(names.Malik)