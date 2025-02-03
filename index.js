

const express = require("express")
const fs = require("fs")
const app = express()
PORT = 3000
const birds  = require("./routes/birds")
/*

We have (request,response);
before respone we can modify our request with middleware
let's take an example with: express.static() in build 
middleware.
*/
// inbuild middle ware to see static files: 

app.use(express.static('public'))
app.use('/',birds)
/*
To create our own middleware 
make a function and just call 
it in app.use();
*/
/*
Now, if we access any route, then 
- 1st middleware will run fast
- 2nd middleware will run second
- 2nd middleware send request to our route
**If we don't give next() in 1st middleware then middleware request won't be complete.
And we can't get our response back.**

# But why we use middleware?
- we can save error log.
- we can use it(middleware) in invidual routes.
*/

// middware 1
app.use((req,res,next)=>{
    fs.appendFileSync("logs.txt",`[Date ${new Date()}] ---reqmethod: [${req.method}] \n`)
    console.log("m1")
    next()
});
// middware 2
app.use((req,res,next)=>{
    console.log("m2")
    next()
})


app.get('/welcome',(req,res)=>{
    return res.json({message:"Welcome to my page."})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})

