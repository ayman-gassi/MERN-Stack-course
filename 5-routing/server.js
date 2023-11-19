const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    let path = './views/'
    switch(req.url){
        case '/' : 
            path += 'index.html'
            res.statusCode = 200
            break
        case '/contact' : 
            path += 'contact.html'
            res.statusCode = 200
            break
        case '/contact-us' : 
            res.statusCode = 301
            res.setHeader('Location','/contact')
            res.end()
            break
        case '/style.css' :
            console.log(req.url)
            path += 'style.css'
            res.statusCode = 200
            break
        default : 
            path += '404.html'
            res.statusCode = 404
            break

    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.writeHead(500)
            res.end()

        }
        else{
            res.end(data)
        }
    })
})
server.listen(3000, "localhost", () => {
    console.log("server start running on port 3000");
  });
