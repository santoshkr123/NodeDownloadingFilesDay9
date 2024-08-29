const http = require("http")
const fs = require("fs")
const url  = require("url")
const server =http.createServer((req,res)=>{
    const location = url.parse(req.url,true)
    const query =location.query
    const path = `./files/${query.filename}`
    try{

   const data = fs.readFileSync(path)
   res.writeHead(200,{
    "Content-Type" : "application/pdf" ,
    "content-Disposition"  :'attachment ;filename="demo.pdf"',
    "Content-Range"  : data.length
})
res.write(data)
res.end()
    }

    catch(err)
    {
        res.writeHead(404,{'Content-Type' : 'text/html'})
        res.write('<h1> File not Found</h1')
        res.end()
    }
})
server.listen(8080)