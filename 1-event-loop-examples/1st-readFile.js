const { readFile } = require('fs');

console.log('started first task');

// check for file path

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    console.log('completed first task')

})
console.log('starting next task...')