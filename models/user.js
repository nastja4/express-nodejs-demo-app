/* eslint-disable no-undef */
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// to exclude certain fields (the password) from the JSON representation of all documents created from that schema that are sent to clients
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject(); // method provided by Mongoose that converts the Mongoose document into a plain JavaScript object
  delete userObject.password; // deleteng a sensitive info
  return userObject;
};

UserSchema.methods.createToken = async function () {
  try {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    console.log(token);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
