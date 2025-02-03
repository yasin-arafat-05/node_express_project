
const crypto = require("crypto");
const requestBodyParser = require("../utils/body-parser");
const { json } = require("stream/consumers");

module.exports = async (req,res)=>{
   if(req.url === "/api/movies"){
    try{
        let body = await requestBodyParser(req);
        console.log("Requeset Body: ",body);
        let uuid = crypto.randomUUID();
        body.id = uuid;
        req.movies.push(body);
        res.writeHead(201,{"Content-Type":"application/json"});
        res.end();
    }catch(err){
        console.log(`Found error while parseData: \n ${err}`);
        res.writeHead(400,"Content-Type","application/json");
        res.end(
            JSON.stringify(
                {
                    title : "Error!",
                    message : "Error while inserting movies"
                }
            )
        );
    }
   }
}

