const appointmentRouter = require("./appointment");
const clientRouter = require("./client");
const veterinarianRouter = require("./veterinarian");
const notificationRouter = require("./notification");
const petRouter = require("./pet");

module.exports = (app) => {
  app.use("/api/appointment", appointmentRouter);
  app.use("/api/vet", veterinarianRouter);
  app.use("/api/client", clientRouter);
  app.use("/api/notifications", notificationRouter);
  app.use("/api/pet", petRouter);
};
