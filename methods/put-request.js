
const requestBodyParser = require("../utils/body-parser")
const write_to_files = require("../utils/write_to_files")

module.exports = async (req,res)=>{
    let baseURL = req.url.substring(0,req.url.lastIndexOf("/")+1);
    let id = req.url.split('/')[3];
    let regexV4 = new RegExp('^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');

    if(!(regexV4.test(id))){
        res.writeHead(404,{"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Validation Failed",message: "UUID is not valid"}));
    }else if(baseURL==="/api/movies/" && regexV4.test(id)){
        let body = await requestBodyParser(req)
        const index = req.movies.findIndex((movie)=>{
            return movie.id === id
        })
        if(index===-1){
            res.writeHead(404,{"Content-Type":"application/json"})
            res.end(JSON.stringify({title:"Validation Failed",message:"Moive is not found"}))
        }else{
            req.movies[index] = {id,...body}
            write_to_files(req.movies)
            res.writeHead(200,{"Content-Type":"application/json"})
            res.end(JSON.stringify(req.movies[index]))
        }

    }else{
        res.writeHead(404,{"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found",message: "Route not found"}));
    }
}