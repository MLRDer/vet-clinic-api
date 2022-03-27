const main = require("./swagger.json");
const tags = require("./tags.json");

const appointmentRoutes = require("./routes/appointment.json");
const clientRoutes = require("./routes/client.json");
const doctorRoutes = require("./routes/doctor.json");
const notificationRoutes = require("./routes/notification.json");
const petRoutes = require("./routes/pet.json");
const serviceRoutes = require("./routes/service.json");

const appointmentModels = require("./models/appointment.json");
const clientModels = require("./models/client.json");
const doctorModels = require("./models/doctor.json");
const notificationModels = require("./models/notification.json");
const petModels = require("./models/pet.json");
const serviceModels = require("./models/service.json");

const paths = {
  ...appointmentRoutes,
  ...clientRoutes,
  ...doctorRoutes,
  ...notificationRoutes,
  ...petRoutes,
  ...serviceRoutes,
};

const definitions = {
  ...appointmentModels,
  ...clientModels,
  ...doctorModels,
  ...notificationModels,
  ...petModels,
  ...serviceModels,
};

module.exports = {
  ...main,
  tags,
  definitions,
  paths,
  host: process.env.BASE_URL,
};
