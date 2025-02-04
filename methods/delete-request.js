
const writeToFile = require("../utils/write_to_files")

module.exports =(req,res)=>{
    let baseURL = req.url.substring(0,req.url.lastIndexOf('/')+1)
    let id = req.url.split('/')[3]
    let regexV4 = new RegExp('^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');

    try{
    if(!regexV4.test(id)){
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Validation failed", message: "Not a valid UUID"}))
    }else if(regexV4.test(id)  && baseURL==="/api/movies/"){
        const index = req.movies.findIndex((movie)=>{
            return movie.id === id
        })
        if(index === -1 ){
            res.writeHead(404,{"Content-Type":"application/json"})
            res.end(JSON.stringify({title:"Validation Failed",message:"Moive is not found"}))
        }else{
            req.movies.splice(index,1)
            writeToFile(req.movies)
            res.writeHead(204,{"Content-Type":"application/json"})
            res.end(JSON.stringify(req.movie))
        }
    }else{
        res.writeHead(404,{"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found",message: "Route not found"}));
    }
 
}catch (err){
    console.log(`error while updating moives: \n ${err}`)
}

}
