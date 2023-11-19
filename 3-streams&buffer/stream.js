const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding : 'utf-8'})

readStream.on('data',(dt) => {
    console.log('new item')
    console.log(dt.toString())
})