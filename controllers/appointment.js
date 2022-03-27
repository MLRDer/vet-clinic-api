const catchAsync = require("../utils/catch_async");
const Appointment = require("../models/appointment");

exports.getAll = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find()
    .populate("doctor")
    .populate("client")
    .populate("pet")
    .lean();

  res.status(200).json({
    success: true,
    data: appointments,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findById(req.params.id)
    .find()
    .populate("doctor")
    .populate("client")
    .populate("pet")
    .lean();

  res.status(200).json({
    success: true,
    data: appointment,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.create(req.body);

  res.status(201).json({
    success: true,
    data: appointment,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    data: appointment,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Appointment.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});
