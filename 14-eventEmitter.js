const EventEmitter = require('events')

const customEmitter = new EventEmitter();

// customEmitter.emit('response') wouldnt make sense if u put the emit here cuz it already sent the response and its above them 2 customEmitter.on 

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`)
})


customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)
