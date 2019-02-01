const mongoose = require('mongoose');

const { Schema } = mongoose;

const NotesSchema = new Schema({
  body: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Notes', NotesSchema);
