const handleSuccess = (res, status_http, message, data) => {
  res.status(status_http).json({
    success: true,
    message: message,
    data: data,
  });
};

module.exports = handleSuccess;
