const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * id int
  name string
  type string
 */

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pets", petSchema);
