const mongoose = require('mongoose');

const { Schema } = mongoose;

const TerminalSchema = new Schema({
  body: {
    type: String,
    default: '',
  },
  root: this,
});

module.exports = mongoose.model('Terminal', TerminalSchema);
