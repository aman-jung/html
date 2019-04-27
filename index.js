var express = require('express');
var app = express();


app.get("/",(req,res)=>{
    console.log("HELLO WORLD");
})
app.listen(process.env.PORT || 5000,()=>{
	console.log("server is up and running");
});