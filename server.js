var express = require('express');
const path = require("path");
var  fileUpload = require("express-fileupload"); 

var app = express();

const webrouter=require("./routes/website")
const adminrouter=require("./routes/admin")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/",webrouter);
app.use("/admin",adminrouter);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(fileUpload()); 
app.use(express.static("public"));

app.listen(3005);