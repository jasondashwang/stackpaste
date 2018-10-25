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
  versions: [{
    type: Schema.Types.ObjectId,
  }],
  version: {
    type: Number,
  },
});

module.exports = mongoose.model('Paste', PasteSchema);
