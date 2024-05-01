const mongoose = require("mongoose")

const albumschema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },

    // singer: {
    //   type: String, 
    // },

    file: {
        type: String, 
    }
  });

const album = mongoose.model('Album', albumschema);

module.exports = album