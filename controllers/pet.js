const catchAsync = require("../utils/catch_async");
const Pet = require("../models/pet");

exports.getAll = catchAsync(async (req, res, next) => {
  const pets = await Pet.find().lean();

  res.status(200).json({
    success: true,
    data: pets,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: pet,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const pet = await Pet.create(req.body);

  res.status(201).json({
    success: true,
    data: pet,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: pet,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Pet.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});
