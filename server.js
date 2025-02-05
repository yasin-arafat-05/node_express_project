
const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const errorHandler = require("./middleware/errorHandler")


//*************************************************************************************
//<--------------------------- Middleware List --------------------------------------->
//*************************************************************************************

// middleware for takin input: bodyParser
app.use(express.json())
// application routes:
app.use("/api/contacts",require("./route/contactRoutes"))
// error handaler api:
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is stated at port no: ${PORT}`)
})
