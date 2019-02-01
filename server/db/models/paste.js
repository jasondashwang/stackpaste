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
  notes: {
    type: Schema.Types.ObjectId,
    ref: 'Notes',
  },
});

module.exports = mongoose.model('Paste', PasteSchema);
