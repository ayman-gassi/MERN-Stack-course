const http = require("http");
const fs = require('fs')
const server = http.createServer((res, req) => {
 // console.log(res.url, res.method);
  req.setHeader("Content-Type", "text/html");
  //render a html content
  fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            req.write(data)
            req.end()
        }
  })
});
server.listen(3000, "localhost", () => {
  console.log("server start running on port 3000");
});
