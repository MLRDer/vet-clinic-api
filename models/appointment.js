const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
  id int
  field string
  date string
  hours string
  client Client
  doctor Doctor
  comment string
  pet Pet
 */

const appointmentSchema = new Schema({
  field: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctors",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: "Pets",
  },
});

module.exports = mongoose.model("Appointments", appointmentSchema);
