const mongoose = require('mongoose');

const { Schema } = mongoose;

const FileSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
  },
  root: this,
  syntax: {
    type: String,
    default: 'text',
  },
});

module.exports = mongoose.model('File', FileSchema);
