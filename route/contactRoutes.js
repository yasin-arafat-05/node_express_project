
const express = require("express")
const router = express.Router()
const {
    getContacts,
    createContact,
    getContact,
    UpdateContact,
    deleteContact
} = require("../controller/contactControllers")



router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact)
module.exports = router
