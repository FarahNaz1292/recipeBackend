const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const saltRounds = 10;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["user", "author", "admin"],
    default: "user",
  },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return typeof value === "string";
      },
      message: "passowrd must be a string",
    },
  },
  photo: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
