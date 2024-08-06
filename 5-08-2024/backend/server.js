const http=require('http')
const PORT=9000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type',"application/json");
    res.write("helllo")
    res.end()
})
server.listen(PORT,()=>{ 
    console.log("server running successfully")

});