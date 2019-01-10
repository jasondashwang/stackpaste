const mongoose = require('mongoose');

const { Schema } = mongoose;

const PasteSchema = new Schema({
  title: {
    type: String,
    trim: true,
    default: '',
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  short: {
    type: String,
    required: true,
  },
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File',
  }],
  version: {
    type: Number,
  },
  terminal: {
    type: Schema.Types.ObjectId,
    ref: 'Terminal',
  },
});

module.exports = mongoose.model('Paste', PasteSchema);
