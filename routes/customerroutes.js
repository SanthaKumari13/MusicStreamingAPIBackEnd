//job seeker routes

const customercontroller = require("../controllers/customercontroller")

const express = require("express")
const customerrouter  = express.Router()

customerrouter.post("/insertcustomer",customercontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customercontroller.checkcustomerlogin)
customerrouter.get("/viewevents",customercontroller.viewevents)
customerrouter.get("/eventaudio/:filename",customercontroller.eventaudio)

module.exports = customerrouter