const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
  id int
  username string
  education string
  experience string
  field string
  image string
  phone string
  email string
  date_of_birth date
  clients [Client]
 */

const veterinarianSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctors", veterinarianSchema);
