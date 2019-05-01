var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    console.log("HELLO WORLD");
})
  
let server = app.listen(process.env.PORT || 5000,()=>{
  let port = server.address().port;
	console.log("server is up and running",port);
});
