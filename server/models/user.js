/* eslint-disable no-undef */
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// to exclude certain fields (the password) from the JSON representation of all documents created from that schema that are sent to clients
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject(); // method provided by Mongoose that converts the Mongoose document into a plain JavaScript object
  delete userObject.password; // deleteng a sensitive info
  delete userObject.tokens;
  return userObject;
};

UserSchema.methods.createToken = async function () {
  try {
    const user = this;
    // jwt.sign(payload, secretOrPrivateKey) is a method from the jsonwebtoken library that generates a signed JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY); // a secret key used to sign the token
    console.log(token);
    user.tokens = user.tokens.concat({ token }); // adds the newly generated token to the tokens array
    await user.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
