const appointmentRouter = require("./appointment");
const clientRouter = require("./client");
const doctorRouter = require("./doctor");
const notificationRouter = require("./notification");
const petRouter = require("./pet");
const serviceRouter = require("./service");

module.exports = (app) => {
  app.use("/api/appointment", appointmentRouter);
  app.use("/api/doctor", doctorRouter);
  app.use("/api/client", clientRouter);
  app.use("/api/notifications", notificationRouter);
  app.use("/api/pet", petRouter);
  app.use("/api/service", serviceRouter);
};
