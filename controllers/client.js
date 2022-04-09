const catchAsync = require("../utils/catch_async");
const Client = require("../models/client");

exports.getAll = catchAsync(async (req, res, next) => {
  const clients = await Client.find().populate("veterinarian").lean();

  res.status(200).json({
    success: true,
    data: clients,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const client = await Client.findById(req.params.id)
    .populate("veterinarian")
    .lean();

  res.status(200).json({
    success: true,
    data: client,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const client = await Client.create(req.body);

  res.status(201).json({
    success: true,
    data: client,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: client,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});

exports.auth = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const client = await Client.findOne({ username: username }).lean();
  if (client && client.password == password) {
    return res.status(200).json({
      success: true,
      data: client,
    });
  } else {
    return res.status(200).json({
      success: false,
      data: null,
    });
  }
});

exports.updatePets = catchAsync(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: client,
  });
});
