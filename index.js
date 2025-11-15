// a simple web server

//http built-in module
const http=require("http");

//file system module 
const fs=require("fs");

const myserver=http.createServer((req,res)=>{
       const log=`${Date.now()}: New request recieved! \n`;
       fs.appendFile("./log.txt",log,(err,dta)=>{
        res.end("hello from server again")
       })
      console.log(req.headers);
      res.end("hello from server");
});

myserver.listen(8000,()=>{console.log("Hello from server! ")});
