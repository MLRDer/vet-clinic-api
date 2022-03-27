const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * id int
  title string
  description string
  to_client Client
  to_doctor Doctor
  created_at date
 */

const notificationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  to_client: {
    type: Schema.Types.ObjectId,
    refs: "Clients",
  },
  to_doctor: {
    type: Schema.Types.ObjectId,
    refs: "Doctors",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notifications", notificationSchema);
