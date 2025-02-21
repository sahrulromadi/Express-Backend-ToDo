const handleSuccess = (res, status_http, message, data, paginationData) => {
  res.status(status_http).json({
    success: true,
    message: message,
    data: data,
    pagination: paginationData,
  });
};

module.exports = handleSuccess;
