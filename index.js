var express = require('express');
var app = express();


app.get("/",(req,res)=>{
    console.log("HELLO WORLD");
})

process
  .on('SIGTERM', shutdown('SIGTERM'))
  .on('SIGINT', shutdown('SIGINT'))
  .on('uncaughtException', shutdown('uncaughtException'))
  .on('SIGKILL',shutdown('SIGKILL'));

setInterval(console.log.bind(console, 'tick'), 1000);
  
app.listen(process.env.PORT || 5000,()=>{
	console.log("server is up and running");
});

function shutdown(signal) {
    return (err) => {
      console.log(`${ signal }...`);
      if (err) console.error(err.stack || err);
      setTimeout(() => {
        console.log('...waited 5s, exiting.');
        process.exit(err ? 1 : 0);
      }, 5000).unref();
    };
  }