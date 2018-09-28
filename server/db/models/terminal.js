const mongoose = require('mongoose');

const { Schema } = mongoose;

const TerminalSchema = new Schema({
  body: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    default: '',
  },

});

module.exports = mongoose.model('Terminal', TerminalSchema);
