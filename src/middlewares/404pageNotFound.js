const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: "halaman tidak ditemukan",
  });
};

module.exports = notFoundHandler;
