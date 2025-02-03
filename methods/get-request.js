

module.exports =(req,res)=>{
    let baseURL = req.url.substring(0,req.url.lastIndexOf("/")+1);
    let id = req.url.split('/')[3];

    //<--- Our movie id is in UUID V4 to check this can i write a regex function like this --->//
    let regexV4 = new RegExp('^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');

    //console.log(id);
    if(req.url === "/api/movies"){
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }else if(!(regexV4.test(id))){
        res.writeHead(404,{"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Validation Failed",message: "UUID is not valid"}));
    }else if(baseURL==="/api/movies/" && regexV4.test(id)){
        res.setHeader("Content-Type","application/json");
        //<------------- filtring out the result --------------->
        let filteredMovies = req.movies.filter((movie)=>{
            console.log(movie.id);
            return movie.id === id;
        });
        if(filteredMovies.length>0){
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovies));
            res.end();
        }else{
            res.statusCode = 400;
            res.write(JSON.stringify({title: "Validation Failed",message: "Movie is not found"}));
            res.end();
        }
        
    }else{
        res.writeHead(404,{"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found",message: "Route not found"}));
    }
}


