/* eslint-disable no-undef */
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// to exclude certain fields (the password) from the JSON representation of all documents created from that schema that are sent to clients
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject(); // method provided by Mongoose that converts the Mongoose document into a plain JavaScript object
  delete userObject.password; // deleteng a sensitive info
  return userObject;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
