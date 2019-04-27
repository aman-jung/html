var express = require('express');
var app = express();

app.listen(process.env.PORT || 5000,()=>{
	console.log("server is up and running");
});