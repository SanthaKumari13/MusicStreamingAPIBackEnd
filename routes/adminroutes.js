//admin routes
const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()


adminrouter.get("/viewcustomers",admincontroller.viewcustomers)
adminrouter.delete("/deletecustomer/:email",admincontroller.deletecustomer)
adminrouter.post('/checkadminlogin', async (req, res) => {
  try {
    // Get the username and password from the request body
    const { username, password } = req.body;

    // Implement your authentication logic here
    if (username === 'admin' && password === 'admin@123') {
      // If authentication succeeds, send a success response
      res.json({ success: true, admin: { username: 'admin' } });
    } else {
      // If authentication fails, send an error response
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle any errors that occur during authentication
    console.error('Error during admin login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

adminrouter.post("/addmanager",admincontroller.addmanager)
adminrouter.get("/viewmanagers",admincontroller.viewmanagers)
adminrouter.delete("/deletemanager/:username",admincontroller.deletemanager)

adminrouter.post("/createevent",admincontroller.createevent)
adminrouter.get("/eventaudio/:filename",admincontroller.eventaudio)
adminrouter.get("/viewevents",admincontroller.viewevents)

module.exports = adminrouter