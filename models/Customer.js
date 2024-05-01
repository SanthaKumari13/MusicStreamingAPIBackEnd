//const mongoose = require("mongoose")
const mongoose = require("mongoose")

const customerschema = new mongoose.Schema({ //object
    fullname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others'] //same as check operator in dbms
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: Number,
        required: true,
        unique:true
      },
  });

const customer = mongoose.model('customer', customerschema); // (collectionname =>(collectionnames) , schema,"name ") - it will take the name instead of collectionname

module.exports = customer;