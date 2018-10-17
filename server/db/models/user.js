const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.methods.hash = function hash(password) {
  const salt = bcrypt.genSaltSync(8);
  const hashedPass = bcrypt.hashSync(password, salt, null);
  return hashedPass;
};

UserSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
