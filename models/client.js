const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
  id int
  fullname string
  username string
  phone string
  email string
  password string
  pets [Pet]
  doctor Doctor
 */

const clientSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctors",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Clients", clientSchema);
