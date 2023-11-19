const axios = require('axios')
const fs = require('fs')
axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    let Data = '';
    res.data.forEach(item => {
            Data += `userid : ${item['userId']}, id : ${item['id']}, title : ${item['title']}, completed :  ${item['completed']} \n`;
    });
    fs.writeFile('Data.csv',Data,(err)=>{
        if(err){
            console.log("Write error ")
        }
        else{
            console.log("Done ")
        }
    })
})
.then(()=>{
    return axios('https://jsonplaceholder.typicode.com/users').then((dt)=>{
        let Data = '';
        dt.data.forEach(item => {
                Data += `id : ${item['id']}, name : ${item['name']}, name : ${item['name']}, email :  ${item['email']} \n`;
        });
        fs.writeFile('Data2.csv',Data,(err)=>{
            if(err){
                console.log("Write error ")
            }
            else{
                console.log("Done ")
            }
        })
    })
})
.catch(e=>{
    console.log(e)
})