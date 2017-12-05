const express = require('express'); 
const app = express();

app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

var PORT = process.env.PORT || 5000; // Whenever heroku runs the applications, it injects environment variables.
// Environment variables are underlying variables that heroku only want to tell us after we deploy our application.
// 

var server = app.listen(PORT,function(){
    console.log('Listening on port: ', server.address().port);
}); //Start the server and listen on port 5000