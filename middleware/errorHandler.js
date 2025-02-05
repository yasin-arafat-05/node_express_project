
const {constants} = require("../constant")

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Error", message:err.message, stackTrace:err.stackTrace})
            break;
        case constants.NOT_FOUND:
            res.json({title:"Not Found", message:err.message, stackTrace:err.stackTrace})
            break;
        case constants.FORBIDDEN:
            res.json({title:"Forbidden", message:err.message, stackTrace:err.stackTrace})
            break;
        case constants.UNAUTHORIZE:
            res.json({title:"Unauthorize", message:err.message, stackTrace:err.stackTrace})
            break;
        case constants.SERVER_ERROR:
            res.json({title:"Server Error", message:err.message, stackTrace:err.stackTrace})
            break;

        default:
            console.log("No error! all is good.")
            break;
    }

}

module.exports = errorHandler
