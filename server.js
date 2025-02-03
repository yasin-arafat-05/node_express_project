
const http = require("http");
//require("dotenv").config();
const PORT = process.env.PORT || 5001;


//<------- Create a server ----------->
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify({message:"Welcome to my page"},null,3));
});

//<------- Listen the server -------->
server.listen(PORT,()=>{
    console.log(`-------XXXXXXXXXXXXXXXXXXXXXXXXXX---------`)
    console.log(`---------XXXXXXXXXXXXXXXXXXXXX------------`)
    console.log(`Server is starting on port no : ${PORT}`);
    console.log(`-----------XXXXXXXXXXXXXXXX---------------`)
    console.log(`-------XXXXXXXXXXXXXXXXXXXXXXXXXX---------`)
});


