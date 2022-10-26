var express=require("express");
var app=express();
var cors=require("cors");
require("dotenv").config();
var port=process.env.PORT || 8000;
var uri="";
app.use(express.json());
app.use(cors())