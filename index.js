
const express = require("express")
const app  = express();
const PORT = 8001

app.get("/",(req,res)=>{
    res.json({message: "Welcome to home page."})
});

app.get("/users",(req,res)=>{
    res.json({message: "Get All the users."})
});

app.get("/users/:id",(req,res)=>{
    res.json({message: `Currently user id is ${req.params.id}`});
});

app.post("/users/",(req,res)=>{
    res.json({message:"Create New Users."});
});

app.put("/users/:id",(req,res)=>{
    res.json({message: `Updated user id is ${req.params.id}`});
});
app.delete("/users/:id",(req,res)=>{
    res.json({message: `Deleted user id is ${req.params.id}`});
});


// <------------------ starting the server listen ----------------------->
app.listen(PORT, ()=>{
    console.log(`Server is running in port: ${PORT}`);
})

