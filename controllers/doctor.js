const catchAsync = require("../utils/catch_async");
const Doctor = require("../models/doctor");

exports.getAll = catchAsync(async (req, res, next) => {
  const doctors = await Doctor.find().lean();

  res.status(200).json({
    success: true,
    data: doctors,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: doctor,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    data: doctor,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: doctor,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Doctor.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});

exports.auth = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const doctor = await Doctor.findOne({ username: username }).lean();
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
