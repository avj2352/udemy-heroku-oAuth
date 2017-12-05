# React, Express, Node & Mongo - Application Development

# Steps to deploy on Heroku - Cloud Application Development

### 1. Specify a `Dynamic` port on your express `index.js`

```js
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
```

### 2. Specify a specific `Node/NPM version` for your Heroku app to setup:
### 3. Specify a `start script` for Heroku to run, after deploying our application

Again this is very simple, goto `package.json`:

```js
{
  "name": "udemy-react-express-mongo",
  "version": "1.0.0",
  "description": "Backend server implementation of MERN stack",
  "main": "index.js",
  "engines":{
    "node":"8.1.1",
    "npm":"5.0.3"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "Pramod",
  "license": "MIT",
  "dependencies": {
    "express": "^4.16.2"
  }
}
```

### 4. Add a `.gitignore` file to ignore `node_modules`
### 5. Commit your project to `git`
- git init
- git add
- git commit -m "Initial Commit"

### 6. Login to Heroku / Download and Install Heroku CLI

- Link: [Heroku Dashboard](https://dashboard.heroku.com/apps)
- Username/Email: `pramod.jingade@gmail.com`
- Password: `zuko2352`
- [Deployed Link of this project](https://peaceful-sea-83549.herokuapp.com/)

# 

