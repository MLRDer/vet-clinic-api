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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
  },
});

module.exports = mongoose.model("Pets", petSchema);
