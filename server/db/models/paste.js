const mongoose = require('mongoose');

const { Schema } = mongoose;

const PasteSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    default: 'Untitled',
  },
  description: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    default: '',
  },
  short: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  file: {
    type: Schema.Types.ObjectId,
    ref: 'File',
  },

});

module.exports = mongoose.model('Paste', PasteSchema);
