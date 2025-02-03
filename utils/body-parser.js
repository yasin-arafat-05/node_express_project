
module.exports = async (request) =>{
    return new Promise((resolve,reject)=>{
        try{
            let body = "";
            request.on("data",(chunk)=>{
                body +=chunk;
            });
            request.on("end",()=>{
                //<------- Handle empty body ---------->
                if (body.trim() === "") {
                    resolve({});
                } else {
                    try {
                        resolve(JSON.parse(body));
                    } catch (err) {
                        console.log(`JSON Parse Error: ${err.message}`);
                        reject(new Error("Invalid JSON format"));
                    }
                }
            })
        }catch(err){
            console.log(`Error while parsing data \n ${err}`);
            reject(err);
        }
    });
}
