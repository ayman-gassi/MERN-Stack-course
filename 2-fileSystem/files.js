let fs = require('fs');

//write file
fs.writeFile('./quotes.txt','HEY YOU', (err) => {

    if(err){
        console.log(err.message)
    }
    else{
        console.log('done writing')
    }

})

//read file
fs.readFile('./quotes.txt', (err,data) => {

    if(err){
        console.log(err.message)
    }
    else{
        console.log(data.toString())
    }

})

//create folder
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {

        if(err){
            console.log(err.message)
        }
        else{
            console.log('folder created ')
        }
    
    })
}
else{
    console.log('folder allready exist ')
}

