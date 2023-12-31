// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <pakageName>

// global dependency - use it in any project 
// npm install -g <pakageName>
// sudo npm install -g <pakageName> (for mac)

// pakage.json - manifest file (stores important info about project/pakage)
// manual approach (create pakage.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('Hello people')

