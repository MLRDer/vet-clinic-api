const catchAsync = require("../utils/catch_async");
const Notification = require("../models/notification");

exports.getAll = catchAsync(async (req, res, next) => {
  const notifications = await Notification.find().lean();

  res.status(200).json({
    success: true,
    data: notifications,
  });
});

exports.get = catchAsync(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id).lean();

  res.status(200).json({
    success: true,
    data: notification,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const notification = await Notification.create(req.body);

  res.status(201).json({
    success: true,
    data: notification,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const notification = await Notification.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: notification,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Notification.findByIdAndDelete(req.params.id);

  res.status(204).json({
    success: true,
  });
});
