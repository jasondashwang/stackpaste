const mongoose = require('mongoose');
const shortid = require('shortid');

const { Schema } = mongoose;

const PasteSchema = new Schema({
  title: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',
  },
  description: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',
  },
  short: {
    type: String,
    required: true,
    trim: true,
    default: shortid.generate,
  },
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File',
  }],
  root: {
    type: Schema.Types.ObjectId,
    ref: 'Paste',
  },
  numOfChildren: {
    type: Schema.Types.Number,
    default: 0,
  },
  version: {
    type: Number,
  },
  terminal: {
    type: Schema.Types.ObjectId,
    ref: 'Terminal',
  },
});

module.exports = mongoose.model('Paste', PasteSchema);
