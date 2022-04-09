const catchAsync = require("../utils/catch_async");
const Veterinarian = require("../models/veterinarian");

exports.getAll = catchAsync(async (req, res, next) => {
  const veterinarians = await Veterinarian.find().lean();

  res.status(200).json({
    success: true,
    data: veterinarians,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const veterinarian = await Veterinarian.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: veterinarian,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const veterinarian = await Veterinarian.create(req.body);

  res.status(201).json({
    success: true,
    data: veterinarian,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const veterinarian = await Veterinarian.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: veterinarian,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Veterinarian.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});

exports.auth = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const veterinarian = await Veterinarian.findOne({
    username: username,
  }).lean();
  if (veterinarian && veterinarian.password == password) {
    return res.status(200).json({
      success: true,
      data: veterinarian,
    });
  } else {
    return res.status(200).json({
      success: false,
      data: null,
    });
  }
});
