
// asyncHandeler automatically handle the exception: 
const asyncHandeler = require("express-async-handler")

//@des: get all the contact
//@route: GET /api/contacts
//@access: public 
const getContacts = asyncHandeler(async (req,res)=>{
    res.status(200).json({message:"Get all contact"})
})



//@des: create a new contact
//@route: POST /api/contacts
//@access: public
const createContact = asyncHandeler(async (req,res)=>{
    console.log("Value of Body: \n", req.body)
    //check the body empty or not:
    const {name,email,phone} = req.body
    if  ( !name ||!email || !phone){
        res.status(400);
        // get the error in html: (to convert into json we need custom middleware)
        throw new Error("All the field are mandatory")
    }
    res.status(201).json({title:"successful",message:"Create a new contact"})
})



//@des: get invidual contract
//@route: GET /api/contacts/:id
//@access: public
const getContact = asyncHandeler(async (req,res)=>{
    res.status(200).json({message:`Get contact for id ${req.params.id}`})
})


//@des: update contacts
//@route: PUT api/contacts/:id
//@access: public
const UpdateContact = asyncHandeler(async (req,res)=>{
    res.status(200).json({message:`Update contact for id ${req.params.id}`})
})


//@des: delete contact
//@route: DELETE api/contacts/:id
//@access: public
const deleteContact = asyncHandeler(async(req,res)=>{
    res.status(200).json({message:`Delete contact for id ${req.params.id}`})
} )


module.exports = {getContacts,createContact,getContact,UpdateContact,deleteContact}





