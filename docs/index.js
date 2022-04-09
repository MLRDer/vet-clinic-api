const main = require("./swagger.json");
const tags = require("./tags.json");

const appointmentRoutes = require("./routes/appointment.json");
const clientRoutes = require("./routes/client.json");
const veterinarianRoutes = require("./routes/veterinarian.json");
const notificationRoutes = require("./routes/notification.json");
const petRoutes = require("./routes/pet.json");

const appointmentModels = require("./models/appointment.json");
const clientModels = require("./models/client.json");
const veterinarianModels = require("./models/veterinarian.json");
const notificationModels = require("./models/notification.json");
const petModels = require("./models/pet.json");

const paths = {
  ...appointmentRoutes,
  ...clientRoutes,
  ...veterinarianRoutes,
  ...notificationRoutes,
  ...petRoutes,
};

const definitions = {
  ...appointmentModels,
  ...clientModels,
  ...veterinarianModels,
  ...notificationModels,
  ...petModels,
};

module.exports = {
  ...main,
  tags,
  definitions,
  paths,
  host: process.env.BASE_URL,
};
