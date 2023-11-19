let fs = require('fs');
fs.readFile('./lowerCase.txt', (err,data) => {

    if(err){
        console.log(err.message)
    }
    else{
        //console.log(data.toString().toUpperCase())
        fs.writeFile('./upperCase.txt',data.toString().toUpperCase(), (err) => {

            if(err){
                console.log(err.message)
            }
            else{
                console.log('done writing')
            }
        
        })
    }

})