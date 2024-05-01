const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 3, // Enforces minimum length of 3 characters
    maxlength: 100, // Enforces maximum length of 100 characters
  },
  singer:{
    type:String,
    required:true,
  },
  description: {
    type: String,
    required: false, // Description is now optional
  },
  file: {
    type: String, // Can be a URL or another string type depending on your needs
    required: true,
  },
  // album: {  
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Album'
  // }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
