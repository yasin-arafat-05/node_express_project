
const fs = require("fs")
const path = require("path")
const { json } = require("stream/consumers")

module.exports = (data)=>{
    try{
        // file_path,(convert_the_json_to_string),"conversion_method"
        fs.writeFileSync(
            path.join(__dirname,"..","data","movies.json"),
            JSON.stringify(data),
            "utf-8"
        )
    }catch(err){
        console.log(`Error while writing in file: /n ${err}`)
    }
}