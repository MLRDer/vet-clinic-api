const catchAsync = require("../utils/catch_async");
const Service = require("../models/service");

exports.getAll = catchAsync(async (req, res, next) => {
  const services = await Service.find().lean();

  res.status(200).json({
    success: true,
    data: services,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const service = await Service.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: service,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    data: service,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: service,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Service.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});
