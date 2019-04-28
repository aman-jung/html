var express = require('express');
var app = express();


app.get("/",(req,res)=>{
    console.log("HELLO WORLD");
})

function handle(signal) {
    console.log(`Received ${signal}`);
  }
  
process.on('SIGINT', handle);
process.on('SIGTERM', handle);
  
app.listen(process.env.PORT || 5000,()=>{
	console.log("server is up and running");
});