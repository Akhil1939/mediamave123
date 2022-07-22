const dotenv = require('dotenv')
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})
require('./db/conn')
// const User = require('./model/userSchema')
app.use(express.json());
app.use(cookieParser())

//router file for storing path
app.use(require('./router/auth')); 

const PORT = process.env.PORT  || 3030;
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("ui/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile("/ui/src/index.js");

  })

 
}
// console.log("Subscribe");

app.listen(PORT, () => {
  console.log(`server is running on port no ${PORT}`);
});
