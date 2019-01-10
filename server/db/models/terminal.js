const mongoose = require('mongoose');

const { Schema } = mongoose;

const TerminalSchema = new Schema({
  body: {
    type: String,
    default: '',
  },
  root: {
    type: Schema.Types.ObjectId,
    ref: 'Terminal',
  },
});

module.exports = mongoose.model('Terminal', TerminalSchema);
