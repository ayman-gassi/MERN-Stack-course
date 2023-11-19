const request = require('request')
const fs = require('fs')
request('https://jsonplaceholder.typicode.com/todos',(error,response,body)=>{
    if(error){
        console.log('Failed connection  '+ error)
        return;
    }
    if(response.statusCode != 200){
        console.log('Error : Status Code '+ response.statusCode)
        return;
    }
    else{
        try{
        body = JSON.parse(body)
        const csvData = body.map((item) => {
            return `userid : ${item.userId}, id : ${item.id}, title : ${item.title}, completed :  ${item.completed}`;
        }).join('\n');
        fs.writeFile('Data.csv',csvData,(err)=>{
            if(err){
                console.log("Write error ")
            }
            else{
                console.log("Done ")
            }
        })
        }
        catch(e){
            console.log('error')       }
    }

})