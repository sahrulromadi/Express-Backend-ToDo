const validateRequest = (req, res, next) => {
  const { title, completed } = req.body;
  const errors = [];

  // validasi title
  if (!title || typeof title != "string" || title.length < 3) {
    errors.push("title harus lebih dari 3 dan berupa string");
  }

  // validasi completed
  if (completed === undefined || typeof completed != "boolean") {
    errors.push("completed harus berupa boolean");
  }

  // jika ada error
  if (errors.length > 0) {
    return res.status(400).json({
      message: "validasi gagal",
      errors: errors,
    });
  }

  // next ke controller
  next();
};

module.exports = validateRequest;
