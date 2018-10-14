const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.hash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

module.exports = mongoose.model('User', UserSchema);
