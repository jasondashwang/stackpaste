const mongoose = require('mongoose');

const { Schema } = mongoose;

const FileSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  body: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },

});

module.exports = mongoose.model('File', FileSchema);
