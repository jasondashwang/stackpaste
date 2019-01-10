const mongoose = require('mongoose');
const shortid = require('shortid');

const { Schema } = mongoose;

const ShortSchema = new Schema({
  short: {
    type: String,
    trim: true,
    default: shortid.generate,
    required: true,
  },
  numOfChildren: {
    type: Schema.Types.Number,
    default: 0,
  },
});

module.exports = mongoose.model('Short', ShortSchema);
