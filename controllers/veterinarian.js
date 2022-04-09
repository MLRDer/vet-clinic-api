const catchAsync = require("../utils/catch_async");
const Veterinarian = require("../models/veterinarian");

exports.getAll = catchAsync(async (req, res, next) => {
  const doctors = await Veterinarian.find().lean();

  res.status(200).json({
    success: true,
    data: doctors,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const doctor = await Veterinarian.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: doctor,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const doctor = await Veterinarian.create(req.body);

  res.status(201).json({
    success: true,
    data: doctor,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const doctor = await Veterinarian.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: doctor,
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

  const doctor = await Veterinarian.findOne({ username: username }).lean();
  if (doctor && doctor.password == password) {
    return res.status(200).json({
      success: true,
      data: doctor,
    });
  } else {
    return res.status(200).json({
      success: false,
      data: null,
    });
  }
});
