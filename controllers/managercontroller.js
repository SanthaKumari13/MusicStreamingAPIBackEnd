const Manager = require("../models/Manager")

const checkmanagerlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const manager = await Manager.findOne(input)
     response.json(manager)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 module.exports = {checkmanagerlogin}