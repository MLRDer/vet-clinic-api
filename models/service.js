const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * id int 
  name string
  fee number
  duration string
 */

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Services", serviceSchema);
