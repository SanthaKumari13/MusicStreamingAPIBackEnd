//recruiter routes

const managercontroller = require("../controllers/managercontroller")

const express = require("express")
const managerrouter  = express.Router()

managerrouter.post("/checkmanagerlogin",managercontroller.checkmanagerlogin)

module.exports = managerrouter