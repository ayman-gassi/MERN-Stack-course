const express = require('express');
const fs = require('fs');
const app = express();

const data = require('./users.json');

app.use(express.json())

app.get('/client', (req, res) => {
  res.send(data);
});

app.get('/client/:id', (req, res) => {
  const foundItem = data.find(item => item.id == req.params.id);
  if(foundItem) res.send({suscess: true , data: foundItem});
  else res.status('404').send({suscess: false , data: "Data not found"})
  
});

app.post('/client', (req, res) => {
    const foundItem = data.find(item => item.id == req.body.id);
    if(foundItem) res.status('404').send({suscess: false , data: "User allready exist"})
    else{
        data.push(req.body)
        fs.writeFile("./users.json",JSON.stringify(data),(err)=>{
            if(err){
                res.status('404').send({suscess: false , data: "Server error"})
            }
            else{
                res.send({suscess: true , data: req.body })
            }
        })
        
    }
  
  });
  /*app.delete('/client/delete/:id', (req, res) => {
    if(! data.find(item => item.id == req.body.id)) res.status('404').send({suscess: false , data: "User does not exist"})
    else{
        fs.writeFile("./users.json",JSON.stringify(data),(err)=>{
            if(err){
                res.status('404').send({suscess: false , data: "Server error"})
            }
            else{
                res.send({suscess: true , data: "User Deleted" })
            }
        })
        
    }
  });*/

app.listen(3001);