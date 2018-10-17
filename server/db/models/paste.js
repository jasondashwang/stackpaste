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
    unique: true,
    required: true,
    trim: true,
    default: shortid.generate,
  },
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File',
  }],

});

module.exports = mongoose.model('Paste', PasteSchema);
