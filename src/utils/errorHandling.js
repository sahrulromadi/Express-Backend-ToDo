const handleError = (res, status_http, message, error) => {
  res.status(status_http).json({
    success: false,
    message: message,
    error: error.message,
  });
};

module.exports = handleError;
