
const http = require("http");
const deleteReq = require("./methods/delete-request")
const postReq = require("./methods/post-request")
const putReq = require("./methods/put-request")
const getReq = require("./methods/get-request")
let movies = require('./data/movies.json')
require("dotenv").config();

const PORT = process.env.PORT || 5001;

//<------- Create a server ----------->
const server = http.createServer((req,res)=>{
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify({title: "Not Found",message: "Route not found"}));
            res.end();
    }
});

//<------- Listen the server -------->
server.listen(PORT,"0.0.0.0",()=>{
    console.log(`-------XXXXXXXXXXXXXXXXXXXXXXXXXX---------`)
    console.log(`---------XXXXXXXXXXXXXXXXXXXXX------------`)
    console.log(`Server is starting on port no : ${PORT}`);
    console.log(`-----------XXXXXXXXXXXXXXXX---------------`)
    console.log(`-------XXXXXXXXXXXXXXXXXXXXXXXXXX---------`)
});


